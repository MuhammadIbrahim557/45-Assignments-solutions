// function make_album(artist: string, title: string, tracks?: number) {
//   let album = {
//     artist,
//     title,
//   };
//   if (tracks){
//     [`tracks`] = tracks;
//   }
//   return album;
// }
// function make_album(artist: string, title: string, tracks?: number) {
//     let album = { artist, title };
//     if (tracks) {
//         album['tracks'] = tracks;
//     }
//     return album;
// }
// console.log(make_album("Ibraheem", "Fearless"));
// console.log(make_album("Ismail", "The Red Sky"));
// console.log(make_album("Huzaifa", "Smartness"));
// function make_album(artist: string, title: string, tracks?: number) {
//     let album = { artist, title };
//     if (tracks) {
//         album['tracks'] = tracks;
//     }
//     return album;
// }
// console.log(make_album("Artist One", "The First Album"));
// console.log(make_album("Artist Two", "The Second Album"));
// console.log(make_album("Artist Three", "The Third Album", 12))
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
