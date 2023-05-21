const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');

const imagesGalery = images.map(el => `
  <li class="galery-link">
    <img class="gallery-img" src="${el.url}" alt="${el.alt}"/>
  </li>
`).join('');
galleryRef.insertAdjacentHTML('afterbegin', imagesGalery);
const galleryLinkRef = document.querySelectorAll('.galery-link');

const galleryImgRef = document.querySelectorAll('.gallery-img');
console.log(galleryLinkRef);
console.log(galleryImgRef);
 galleryLinkRef.forEach(el => {
  el.style.listStyleType = 'none';
})

galleryRef.style.listStyleType = 'none';
galleryRef.style.display = 'flex';
galleryRef.style.gap = '30px';

galleryImgRef.forEach(el => {
el.style.width = '450px';
el.style.height = 'auto';
});











//  galleryRef.style.display = 'flex';
//  galleryLiRef.style.width = '100px';
//  galleryLiRef.style.height = '50px';


//  console.log(galleryRef);







