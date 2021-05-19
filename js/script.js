var navbar = document.querySelector('.humberger');
var ul_li = document.querySelector('nav ul');
navbar.addEventListener('click', function() {
	ul_li.classList.toggle('slide');
	navbar.classList.toggle('active');
})

// bagian scroll smoth
var about = document.getElementById('About');
var produk = document.getElementById('Product');
var contact = document.getElementById('Contact');

// about.addEventListener('click', function() {
// 	about
// })

// bagian kontak
 const scriptURL = 'https://script.google.com/macros/s/AKfycbwZ1UOuntNm_ytbFLVXAjRnhLMYer-90B9K-KzTdCgEvZf_98jXtu2hqdhBXbSyFyQpQQ/exec'
 const form = document.forms['Kontak-Website']
 const kirim = document.getElementById('submit');
 const loading = document.querySelector('.btn-loading');
 const alert = document.querySelector('.alert');

  form.addEventListener('submit', e => {
    e.preventDefault()
    // menghilangkan kirim
    // memnunculkan loading
    kirim.style.display = 'none';
    loading.style.display = 'flex';
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
      	// menhilangkan loading
      	// memunculkan kirim
      	// memunculkan alert
      	kirim.style.display = 'flex';
      	loading.style.display = 'none';
      		alert.style.display = 'flex';
      		setTimeout(function() {
      			alert.style.display = 'none';
      		},2000);
      	form.reset();
      	console.log('Success!', response)
      })
      .catch(error => console.error('Error!', error.message))
  })