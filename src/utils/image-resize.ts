const resizeImg = (url: string | null | undefined) : string => 
    url ? url.replace("/media/", "/media/crop/600/400/") : ""

export default resizeImg;