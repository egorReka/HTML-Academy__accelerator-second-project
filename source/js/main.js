import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { initNavToggle } from './nav-toggle';
import { initSwiperHiro } from './swiper-hero';
import { initSwiperTours } from './tours-swiper';
import { initSwiperTraining } from './training-swiper';
import { initSwiperReviews } from './reviews-swiper';
import { initSwiperAdv } from './swiper-adv';
import { initSwiperGallery } from './gallery-swiper';
import { initValidationForm } from './form-validate';

initNavToggle();
initSwiperHiro(Swiper, Pagination);
initSwiperTours(Swiper, Navigation);
initSwiperTraining(Swiper, Navigation);
initSwiperReviews(Swiper, Navigation);
initSwiperAdv(Swiper, Navigation);
initSwiperGallery(Swiper, Navigation);
initValidationForm();
