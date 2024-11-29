const resizeImg = (url: string) : string => {
    return url.replace("/media/", "/media/crop/600/400/");
}

export default resizeImg;