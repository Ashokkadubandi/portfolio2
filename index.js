let worksList = [
    {api:'redbus.txt',name:'Redbus',content:'Data scraping using selenium and Streamit application'},
    {api:'dataspark.txt',name:'DataSpark-Illuminating-Insights-for Global-Electronics',content:'Retail Analytics in the Electronic Industry'},
    {api:'dominous.txt',name:'Dominos---Preddictive-purchase-order-system',content:'Predictive purchase order system'},
    {api:'salarypredict.txt',name:'Salary prediction',content:'Using ML Models'},
    {api:'cardekho.txt',name:'Car-Dekho',content:'used car price Prediction'}
]
let worksELe = document.getElementById('works')

const createWorks = () => {
    worksList.map(each => {
        const workCard = document.createElement('div');
        const workHeading = document.createElement('h1');
        const workDesc = document.createElement('p');

        workCard.classList.add('workcard');
        worksELe.appendChild(workCard);

        workHeading.textContent = each.name;
        workHeading.classList.add('work-name');
        workCard.appendChild(workHeading);

        workDesc.textContent = each.content;
        workDesc.classList.add('work-desc');
        workCard.appendChild(workDesc);

        const workViewbtn = document.createElement('button')
        workViewbtn.textContent = 'View';
        workViewbtn.classList.add('works-view')
        workViewbtn.onclick = function(){
            console.log(each)
            window.location.href = `redirection/page2.html?name=${encodeURIComponent(each.name)}&api=${each.api}`
        }
        workCard.appendChild(workViewbtn);

    })
}

createWorks()