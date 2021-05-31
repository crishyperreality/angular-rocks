export class Band {
    band_id: number;
    name: string;
    info?: string;
    image?: string;
    video?: string;
}

export type Bands = Band[];