// Takes in the userEmail used to name the saved avatar image file in the AWS cloud and returns the proper url source string to display it

const renderAvatar = (userEmail) => {
    const bucketName = process.env.REACT_APP_BUCKET_NAME
    if (bucketName === undefined) {
        return `https://via.placeholder.com/150`
    }
    return `${bucketName}${userEmail}.jpg`
}

export default renderAvatar;

