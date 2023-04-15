var form=document.getElementById('my-form');

form.addEventListener('submit',SaveToCrudCrud);

async function SaveToCrudCrud(event){
    event.preventDefault();

    const candyname=event.target.candyname.value;
    const description=event.target.description.value;
    const price=event.target.price.value;
    const quant=event.target.quantity.value

    const obj= { 
        candyname,
        description ,
        price,
        quant
    }

    try {
        const response = await axios.post("https://crudcrud.com/api/d0c762d041a942aca34da32bc53b3c5a/CandyData", obj)
        showUserOnScreen(response.data)
        console.log(response)
    } catch (error) {
        document.body.innerHTML+="<h2>Something went Wrong</h2>";
        console.log(error)
    }
   

}

window.addEventListener("DOMContentLoaded",async ()=>{
    try {
        const response = await axios.get("https://crudcrud.com/api/d0c762d041a942aca34da32bc53b3c5a/CandyData")

        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i])
            showUserOnScreen(response.data[i])
        }

    } catch (error) {
        document.body.innerHTML+="<h2>Something went Wrong</h2>";
        console.log(error)
    }
     
})

async function Buy1(obj, parentElem, childElem) {
    try {
        obj.quant=obj.quant-1;
        const response = await axios.put(`https://crudcrud.com/api/d0c762d041a942aca34da32bc53b3c5a/CandyData/${obj._id}`,{
            candyname: obj.candyname, 
            description: obj.description ,
            price: obj.price,
            quant: obj.quant})

        parentElem.removeChild(childElem)
        showUserOnScreen(obj);
    } catch (error) {
        document.body.innerHTML+="<h2>Something went Wrong</h2>";
        console.log(error)
    }
}
async function Buy2(obj, parentElem, childElem) {
    try {
        obj.quant=obj.quant-2;
        const response = await axios.put(`https://crudcrud.com/api/d0c762d041a942aca34da32bc53b3c5a/CandyData/${obj._id}`,{
            candyname: obj.candyname, 
            description: obj.description ,
            price: obj.price,
            quant: obj.quant})

        parentElem.removeChild(childElem)
        showUserOnScreen(obj);
    } catch (error) {
        document.body.innerHTML+="<h2>Something went Wrong</h2>";
        console.log(error)
    }
}
async function Buy3(obj, parentElem, childElem) {
    try {
        obj.quant=obj.quant-3;
        const response = await axios.put(`https://crudcrud.com/api/d0c762d041a942aca34da32bc53b3c5a/CandyData/${obj._id}`,{
            candyname: obj.candyname, 
            description: obj.description ,
            price: obj.price,
            quant: obj.quant})

        parentElem.removeChild(childElem)
        showUserOnScreen(obj);
    } catch (error) {
        document.body.innerHTML+="<h2>Something went Wrong</h2>";
        console.log(error)
    }
}

function showUserOnScreen(obj){
    const parentElem=document.getElementById('userlist');
    const childElem=document.createElement('li');

    childElem.textContent=obj.candyname +" - "+ obj.description+" - "+obj.price+" - "+obj.quant;

    const Buy1Button=document.createElement('input');
    Buy1Button.type='button';
    Buy1Button.value='Buy 1';
    Buy1Button.onclick=()=>{
        Buy1(obj, parentElem, childElem);    
    }
    const Buy2Button=document.createElement('input');
    Buy2Button.type='button';
    Buy2Button.value='Buy 2';
    Buy2Button.onclick=()=>{
        Buy2(obj, parentElem, childElem);
    }
    const Buy3Button=document.createElement('input');
    Buy3Button.type='button';
    Buy3Button.value='Buy 3';
    Buy3Button.onclick=()=>{
        Buy3(obj, parentElem, childElem);
    }

    childElem.appendChild(Buy1Button);
    childElem.appendChild(Buy2Button);
    childElem.appendChild(Buy3Button);
    parentElem.appendChild(childElem);

}

    