import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { toggleNav } from './nav';
import { initSwiperHiro } from './swiper-hero';
import { initSwiperTours } from './tours-swiper';
import { initSwiperTraining } from './training-swiper';
import { initSwiperReviews } from './reviews-swiper';
import { initSwiperAdv } from './swiper-adv';
import { initSwiperGallery } from './gallery-swiper';
import { validateForm } from './validate-form';

toggleNav();
initSwiperHiro(Swiper, Pagination);
initSwiperTours(Swiper, Navigation);
initSwiperTraining(Swiper, Navigation);
initSwiperReviews(Swiper, Navigation);
initSwiperAdv(Swiper, Navigation);
initSwiperGallery(Swiper, Navigation);
validateForm();
