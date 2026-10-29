// The signature pad: a canvas over the whole screen, drawn with the finger,
// a pen or the mouse (pointer events). Strokes are kept as points, so a turn
// of the phone redraws them; the confirmed signature is cropped to its ink
// and rendered at three times the size as a PNG.
"use strict";

class SignaturePad {
  constructor(canvas) {
    this.canvas = canvas;
    this.strokes = [];
    this.current = null;
    canvas.addEventListener("pointerdown", (e) => this.down(e));
    canvas.addEventListener("pointermove", (e) => this.move(e));
    for (const ev of ["pointerup", "pointercancel", "pointerleave"]) {
      canvas.addEventListener(ev, (e) => this.up(e));
    }
    window.addEventListener("resize", () => this.fit());
  }

  fit() {
    const r = this.canvas.getBoundingClientRect();
    if (!r.width) return;
    const ratio = window.devicePixelRatio || 1;
    this.canvas.width = Math.round(r.width * ratio);
    this.canvas.height = Math.round(r.height * ratio);
    this.redraw();
  }

  point(e) {
    const r = this.canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  down(e) {
    e.preventDefault();
    this.canvas.setPointerCapture(e.pointerId);
    this.current = [this.point(e)];
    this.strokes.push(this.current);
    this.redraw();
  }

  move(e) {
    if (!this.current) return;
    e.preventDefault();
    const events = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
    for (const ev of events.length ? events : [e]) this.current.push(this.point(ev));
    this.redraw();
  }

  up() {
    this.current = null;
  }

  clear() {
    this.strokes = [];
    this.redraw();
  }

  get empty() {
    return !this.strokes.some((s) => s.length > 0);
  }

  static draw(ctx, strokes, scale, dx, dy, width) {
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#0b2a5b";
    ctx.fillStyle = "#0b2a5b";
    ctx.lineWidth = width * scale;
    for (const s of strokes) {
      const p = (i) => ({ x: (s[i].x + dx) * scale, y: (s[i].y + dy) * scale });
      if (s.length === 1) {
        const a = p(0);
        ctx.beginPath();
        ctx.arc(a.x, a.y, ctx.lineWidth / 2, 0, Math.PI * 2);
        ctx.fill();
        continue;
      }
      // through the midpoints, the points as control points: a smooth line
      ctx.beginPath();
      let a = p(0);
      ctx.moveTo(a.x, a.y);
      for (let i = 1; i < s.length - 1; i++) {
        const b = p(i);
        const c = p(i + 1);
        ctx.quadraticCurveTo(b.x, b.y, (b.x + c.x) / 2, (b.y + c.y) / 2);
      }
      a = p(s.length - 1);
      ctx.lineTo(a.x, a.y);
      ctx.stroke();
    }
  }

  redraw() {
    const ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    SignaturePad.draw(ctx, this.strokes, window.devicePixelRatio || 1, 0, 0, 2.6);
  }

  // the ink cropped with a margin, at 3x, as a PNG data URL
  toDataURL() {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const s of this.strokes) {
      for (const p of s) {
        x0 = Math.min(x0, p.x); y0 = Math.min(y0, p.y);
        x1 = Math.max(x1, p.x); y1 = Math.max(y1, p.y);
      }
    }
    const pad = 8;
    const scale = 3;
    const out = document.createElement("canvas");
    out.width = Math.ceil((x1 - x0 + pad * 2) * scale);
    out.height = Math.ceil((y1 - y0 + pad * 2) * scale);
    SignaturePad.draw(out.getContext("2d"), this.strokes, scale, pad - x0, pad - y0, 2.6);
    return { url: out.toDataURL("image/png"), width: out.width / scale, height: out.height / scale };
  }
}
