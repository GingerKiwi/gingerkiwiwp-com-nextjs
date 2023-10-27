export const relativeToAbsoluteUrls = (htmlString = "") => {
    return htmlString.split(process.env.NEXT_PUBLIC_WORDPRESS_URL).join("");
}

// export const relativeToAbsoluteUrls = (content) => {
//     const regex = /(?<=src=")(\/.*?)(?=")/g;
//     const matches = content.match(regex);
//     if(matches) {
//         matches.forEach(match => {
//             content = content.replace(match, `http://localhost:3000${match}`);
//         });
//     }
//     return content;
// }