import * as stream from 'stream';
import Frame from './frame';

const debug = require('debug')('unpi:writer');

class Writer extends stream.Readable {
    public writeFrame(frame: Frame): void {
        const buffer = frame.toBuffer();
        debug(`--> frame [${Array.from(buffer)}]`);
        this.push(buffer);
    }

    public writeBuffer(buffer: Buffer): void {
        debug(`--> buffer [${Array.from(buffer)}]`);
        this.push(buffer);
    }

    public _read(): void {}
}

export default Writer;