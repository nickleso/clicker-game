export function addMarkupLevel1(clickers) {
  return clickers
    .map(() => {
      return `<ul class="clicker-list">
      <li class="clicker-item1">
        <button class="clicker-button" type="button" data-clicker></button>
      </li>
      <li class="clicker-item2">
        <button class="clicker-button" type="button" data-clicker></button>
      </li>
      <li class="clicker-item3">
        <button class="clicker-button" type="button" data-clicker></button>
      </li>
      <li class="clicker-item4">
        <button class="clicker-button" type="button" data-clicker></button>
      </li>
      <li class="clicker-item5">
        <button class="clicker-button" type="button" data-clicker></button>
      </li>
    </ul>`;
    })
    .join("");
}

// export function addMarkupLevel2(clickers) {
//   return clickers
//     .map(() => {
//       return `<ul class="clicker-list">
//       <li class="clicker-item">
//         <button class="clicker" type="button" data-clicker>coin1</button>
//       </li>
//       <li class="clicker-item">
//         <button class="clicker" type="button" data-clicker>coin2</button>
//       </li>
//       <li class="clicker-item">
//         <button class="clicker" type="button" data-clicker>coin3</button>
//       </li>
//       <li class="clicker-item">
//         <button class="clicker" type="button" data-clicker>coin4</button>
//       </li>
//       <li class="clicker-item">
//         <button class="clicker" type="button" data-clicker>coin5</button>
//       </li>
//       <li class="clicker-item">
//         <button class="clicker" type="button" data-clicker>coin1</button>
//       </li>
//       <li class="clicker-item">
//         <button class="clicker" type="button" data-clicker>coin2</button>
//       </li>
//       <li class="clicker-item">
//         <button class="clicker" type="button" data-clicker>coin3</button>
//       </li>
//       <li class="clicker-item">
//         <button class="clicker" type="button" data-clicker>coin4</button>
//       </li>
//       <li class="clicker-item">
//         <button class="clicker" type="button" data-clicker>coin5</button>
//       </li>
//     </ul>`;
//     })
//     .join("");
// }
