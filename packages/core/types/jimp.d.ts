import {
  Bitmap,
  ImageCallback,
  URLOptions,
  ListenableName,
  ListenerData,
  GenericCallback,
  BlendMode,
  RGBA,
  RGB
} from './etc';

export declare class Jimp {
  // Constructors
  constructor(path: string, cb?: ImageCallback);
  constructor(urlOptions: URLOptions, cb?: ImageCallback);
  constructor(image: Jimp, cb?: ImageCallback);
  constructor(data: Buffer, cb?: ImageCallback);
  constructor(data: Bitmap, cb?: ImageCallback);
  constructor(w: number, h: number, cb?: ImageCallback);
  constructor(
    w: number,
    h: number,
    background?: number | string,
    cb?: ImageCallback
  );
  // For custom constructors when using Jimp.appendConstructorOption
  constructor(...args: any[]);
  prototype: this;
  // Constants
  AUTO: -1;
  // blend modes
  BLEND_SOURCE_OVER: string;
  BLEND_DESTINATION_OVER: string;
  BLEND_MULTIPLY: string;
  BLEND_SCREEN: string;
  BLEND_OVERLAY: string;
  BLEND_DARKEN: string;
  BLEND_LIGHTEN: string;
  BLEND_HARDLIGHT: string;
  BLEND_DIFFERENCE: string;
  BLEND_EXCLUSION: string;
  // Align modes for cover, contain, bit masks
  HORIZONTAL_ALIGN_LEFT: 1;
  HORIZONTAL_ALIGN_CENTER: 2;
  HORIZONTAL_ALIGN_RIGHT: 4;
  VERTICAL_ALIGN_TOP: 8;
  VERTICAL_ALIGN_MIDDLE: 16;
  VERTICAL_ALIGN_BOTTOM: 32;
  // Edge Handling
  EDGE_EXTEND: 1;
  EDGE_WRAP: 2;
  EDGE_CROP: 3;
  // Properties
  bitmap: Bitmap;
  _rgba: boolean;
  _background: number;
  _originalMime: string;
  // Methods
  on<T extends ListenableName>(
    event: T,
    cb: (data: ListenerData<T>) => any
  ): any;
  parseBitmap(
    data: Buffer,
    path: string | null | undefined,
    cb?: ImageCallback
  ): void;
  hasAlpha(): boolean;
  getHeight(): number;
  getWidth(): number;
  inspect(): string;
  toString(): string;
  getMIME(): string;
  getExtension(): string;
  distanceFromHash(hash: string): number;
  write(path: string, cb?: ImageCallback): this;
  writeAsync(path: string): Promise<Jimp>;
  rgba(bool: boolean, cb?: ImageCallback): this;
  getBase64(mime: string, cb: GenericCallback<string, any, this>): this;
  getBase64Async(mime: string): Promise<string>;
  hash(cb?: GenericCallback<string, any, this>): string;
  hash(
    base: number | null | undefined,
    cb?: GenericCallback<string, any, this>
  ): string;
  getBuffer(mime: string, cb: GenericCallback<Buffer>): this;
  getBufferAsync(mime: string): Promise<Buffer>;
  getPixelIndex(
    x: number,
    y: number,
    cb?: GenericCallback<number, any, this>
  ): number;
  getPixelIndex(
    x: number,
    y: number,
    edgeHandling: string,
    cb?: GenericCallback<number, any, this>
  ): number;
  getPixelColor(
    x: number,
    y: number,
    cb?: GenericCallback<number, any, this>
  ): number;
  getPixelColour(
    x: number,
    y: number,
    cb?: GenericCallback<number, any, this>
  ): number;
  setPixelColor(hex: number, x: number, y: number, cb?: ImageCallback): this;
  setPixelColour(hex: number, x: number, y: number, cb?: ImageCallback): this;
  clone(cb?: ImageCallback): this;
  cloneQuiet(cb?: ImageCallback): this;
  background(hex: number, cb?: ImageCallback): this;
  backgroundQuiet(hex: number, cb?: ImageCallback): this;
  scan(
    x: number,
    y: number,
    w: number,
    h: number,
    f: (this: this, x: number, y: number, idx: number) => any,
    cb?: ImageCallback
  ): this;
  scanQuiet(
    x: number,
    y: number,
    w: number,
    h: number,
    f: (this: this, x: number, y: number, idx: number) => any,
    cb?: ImageCallback
  ): this;
  scanIterator(
    x: number,
    y: number,
    w: number,
    h: number
  ): IterableIterator<{ x: number; y: number; idx: number; image: Jimp }>;

  // Effect methods
  composite(
    src: Jimp,
    x: number,
    y: number,
    options?: BlendMode,
    cb?: ImageCallback
  ): this;

  // Functions
  appendConstructorOption<T extends any[]>(
    name: string,
    test: (...args: T[]) => boolean,
    run: (
      this: Jimp,
      resolve: (jimp: Jimp) => any,
      reject: (reason: Error) => any,
      ...args: T[]
    ) => any
  ): void;
  read(path: string): Promise<this>;
  read(image: Jimp): Promise<this>;
  read(data: Buffer): Promise<this>;
  read(w: number, h: number, background?: number | string): Promise<this>;
  create(path: string): Promise<this>;
  create(image: Jimp): Promise<this>;
  create(data: Buffer): Promise<this>;
  create(w: number, h: number, background?: number | string): Promise<this>;
  rgbaToInt(
    r: number,
    g: number,
    b: number,
    a: number,
    cb: GenericCallback<number, any, this>
  ): number;
  intToRGBA(i: number, cb?: GenericCallback<RGBA>): RGBA;
  cssColorToHex(cssColor: string): number;
  limit255(n: number): number;
  diff(
    img1: Jimp,
    img2: Jimp,
    threshold?: number
  ): {
    percent: number;
    image: Jimp;
  };
  distance(img1: Jimp, img2: Jimp): number;
  compareHashes(hash1: string, hash2: string): number;
  colorDiff(rgba1: RGB, rgba2: RGB): number;
  colorDiff(rgba1: RGBA, rgba2: RGBA): number;
}