const resizeImg = (url: string | null | undefined) : string => 
    url ? url.replace("/media/", "/media/crop/600/400/") : ""
    // Only cropping available on this endpoint seems to be 600x400
export default resizeImg;