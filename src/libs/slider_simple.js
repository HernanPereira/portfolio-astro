import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

['astro:page-load', 'astro:after-swap'].forEach (event => document.addEventListener(event, loadSwiper));

function loadSwiper() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
}
