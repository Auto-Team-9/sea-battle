interface PixelitConfig {
  to: HTMLCanvasElement;
  from: HTMLImageElement;
  scale?: number;
}

export class Pixelit {
  drawto: HTMLCanvasElement;
  drawfrom: HTMLImageElement;
  scale: number;
  ctx: CanvasRenderingContext2D;

  constructor(config: PixelitConfig) {
    this.drawto = config.to;
    this.drawfrom = config.from;
    this.scale =
      config.scale && config.scale > 0 && config.scale <= 50 ? config.scale * 0.01 : 0.08;

    const ctx = this.drawto.getContext('2d');
    if (!ctx) {
      throw new Error('CanvasRenderingContext2D not available');
    }
    this.ctx = ctx;
  }

  pixelate() {
    if (!this.drawfrom) return this;

    const natW = this.drawfrom.naturalWidth;
    const natH = this.drawfrom.naturalHeight;

    this.drawto.width = natW;
    this.drawto.height = natH;

    const scaledW = natW * this.scale;
    const scaledH = natH * this.scale;

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');

    tempCanvas.width = scaledW;
    tempCanvas.height = scaledH;

    tempCtx?.drawImage(this.drawfrom, 0, 0, scaledW, scaledH);

    this.ctx.imageSmoothingEnabled = false;

    this.ctx.drawImage(tempCanvas, 0, 0, scaledW, scaledH, 0, 0, natW, natH);

    return this;
  }
}
