$(".card").hover(
  function () {
    $(this).addClass("result_hover");
  },
  function () {
    $(this).removeClass("result_hover");
  }
);
// filter use by jqurey 
$(document).ready(function () {
  $('.buttons').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var filter = $(this).attr('data-filter')
    if (filter == 'all') {
      $('.product').show(400);
    } else {
      $('.product').not('.' + filter).hide(200);
      $('.product').filter('.' + filter).show(400);
    }
  });
  // filter end
  // using getUrlParameter start
  brand = getUrlParameter('brand');
  if (brand!=null) {
    displayProductByKey(brand);
    if(brand.length>1) {
      $('.product').not('.' + brand).hide(200);
      $('.product').filter('.' + brand).show(400);
    }
  }
  service = getUrlParameter('service');
  if (service!=null) {
    displayProductByKey(service);
    if(service.length>1) {
      $('.product').not('.' + service).hide(200);
      $('.product').filter('.' + service).show(400);
    }
  }
});
function getUrlParameter(name) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};
 // using getUrlParameter end


// login form start
(function () {
  'use strict';
  window.addEventListener('load', function () {
      var form = document.getElementById('loginForm');
      var alertBox = document.getElementById('alert');
      form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              alertBox.textContent = 'Please fill out the form correctly.';
              alertBox.classList.remove('alert-success');
              alertBox.classList.add('alert-danger');
              alertBox.style.display = 'block';
          } else {
              event.preventDefault(); // Prevent form submission for demonstration
              alertBox.textContent = 'Login successful!';
              alertBox.classList.remove('alert-danger');
              alertBox.classList.add('alert-success');
              alertBox.style.display = 'block';
              form.style.display = 'none'; // Hide the form
          }
          form.classList.add('was-validated');
      }, false);
  }, false);
})();
// login form end

const products = {
  'canon': {
    title: "see your photos and video come to life with stunning clarity and rich details through legendary canon",
    imgSrc: "assets/images/canon/40X-removebg-preview.png"
  },
  'nikon': {
    title: "my work is driven by the idea that visual story telling and images have the power to change the world",
    imgSrc: "assets/images/nikon/Nikon_1_V1_Mirrorless_Digital-1-removebg-preview.png"
  },
  'sony': {
    title: "Every click of my Sony camera is a step closer to capturing the perfect moment.",
    imgSrc: "assets/images/sony/Sony_A7C_II-removebg-preview.png"
  },
  'fujifilm': {
    title: "Fujifilm camera X-T4, I capture not just images but emotions, telling stories through every frame.",
    imgSrc: "assets/images/fujifilm/Fujifilm_X-2-.png"
  },
  'memory-card': {
    title: "In the world of photography, a reliable memory card is worth its weight in gold.",
    imgSrc: "assets/images/memorycard/Extreme Pro.png"
  },
  'lenses': {
    title: "A great lens can turn an ordinary scene into a captivating masterpiece.",
    imgSrc: "assets/images/lenses/Fujifilm XF 27mm .png"
  },
  'pro-audio': {
    title: "Good audio can make a visual experience extraordinary.",
    imgSrc: "assets/images/pro_audio/Used Behringer Europower PMP500 500W 12-Channel Powered Mixer with KLARK TEKNIK Multi-FX Processor, Compressors, FBQ Feedback Detection System and Wireless Option OB.png"
  },
  'tripod-support': {
    title: "Stability in photography is the first step towards clarity, and a good tripod provides that foundation.",
    imgSrc: "assets/images/tripod/Joby .png"
  },
  'lighting-studio': {
    title: "Good lighting can turn an ordinary scene into a magical moment.",
    imgSrc: "assets/images/lighting/Elinchrom_ONE_Off-Camera_Flash_Dual_Kit.png"
  },
  'camerabags-cases': {
    title: "Investing in a quality camera case is investing in the longevity of your equipment and the quality of your work.",
    imgSrc: "assets/images/bags/Case_Logic_DCB-304_High_Zoom_Camera_Case__Black.png"
  },
  'accessories': {
    title: "Accessories are the tools that bridge the gap between vision and reality in photography.",
    imgSrc: "assets/images/miscellaneous_accessories/Kondor_Blue_Full_Cage_with_Top_Handle_for_Canon.png"
  },
};
function displayProductByKey(key) {
  const container = document.getElementById('banner-container');
  container.innerHTML = '';

  const product = products[key];

  if (product) {
    const row = document.createElement('div');
    row.className = 'row';

    const textDiv = document.createElement('div');
    textDiv.className = 'col-lg-6 col-md-6 col-sm-12 mt-5 p-5 text-white text';

    const h2 = document.createElement('h2');
    h2.textContent = product.title;
    textDiv.appendChild(h2);

    const imgDiv = document.createElement('div');
    imgDiv.className = 'col-lg-6 col-md-6 col-sm-12 bimg';

    const img = document.createElement('img');
    img.src = product.imgSrc;
    img.className = 'camera';
    imgDiv.appendChild(img);

    row.appendChild(textDiv);
    row.appendChild(imgDiv);
    container.appendChild(row);
  } else {
    console.error('Product not found for key:', key);
  }
}
// Example call to display a product
displayProductByKey('canon');
// ....contact form.....

