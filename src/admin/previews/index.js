import HeaderPreview from '/admin/previews/header.js';
import Footer from '/admin/previews/footer.js';
import About from '/admin/previews/sections/about.js';
CMS.registerPreviewTemplate('header', HeaderPreview);
CMS.registerPreviewTemplate('footer', Footer);
CMS.registerPreviewTemplate('about', About);
CMS.registerPreviewStyle('/assets/css/style.css');
