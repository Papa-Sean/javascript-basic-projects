const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click',()=>{
    // console.log('hello');
    document.documentElement.classList.toggle('dark-theme');
});


const articlesData = articles.map((article)=>{
    const{title, date, length, snippet} = article;
    //format date
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `<article class="post">
    <h2>${title}</h2>
    <div class="post-info">
      <span>${formatDate}</span>
      <span>${length} min read</span>
      <p>
        ${snippet}
      </p>
    </div>
  </article>`
}).join('');

articlesContainer.innerHTML = articlesData;
// added a "script" tag in html so data.js is now available
// console.log(articles);
// console.log(moment);


