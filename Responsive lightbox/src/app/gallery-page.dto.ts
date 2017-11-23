export class GalleryPage {

 public Images : Array<string>;
 public LastPage: number;

 get ImagesCount():number {

    if(this.Images === undefined)
    return 0;
    return this.Images.length;
}

get LastImageIndex():number {
    
        if(this.Images === undefined)
        return 0;
        return this.Images.length-1;
    }

}
