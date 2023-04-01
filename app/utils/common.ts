import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const cwd = process.cwd();

export const __dirname = (import_meta: ImportMeta) : string => {
    return dirname(fileURLToPath(import_meta.url));
}