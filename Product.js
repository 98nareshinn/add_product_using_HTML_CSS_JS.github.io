function Product() {
    this.category;
    this.Pname;
    this.PId;
    this.MfgDate;
    this.ExpDate;
    this.QTY;
    this.Price;
    this.Discount;
    this.GST;
    this.TaxPrice;
    this.DiscountPrice;
    this.TotalPrice;
}

Product.prototype.display=function()
{
    let tr =document.createElement("tr");
    let td =document.createElement("td");
    td.innerText=this.category;
    tr.appendChild(td);

    td.innerText=this.name;
    tr.appendChild(td);
    
    td.innerText=this.PId;
    tr.appendChild(td);

    td =document.createElement("td");
    td.innerText=this.MfgDate;
    tr.appendChild(td);

    td =document.createElement("td");
    td.innerText=this.ExpDate;
    tr.appendChild(td);


    td =document.createElement("td");
    td.innerText=this.QTY;
    tr.appendChild(td);

    td =document.createElement("td");
    td.innerText=this.Price;
    tr.appendChild(td);

    td =document.createElement("td");
    td.innerText=this.Discount;
    tr.appendChild(td);

    td =document.createElement("td");
    td.innerText=this.GST;
    tr.appendChild(td);

    td =document.createElement("td");
    td.innerText=this.TaxPrice;
    tr.appendChild(td);

    td =document.createElement("td");
    td.innerText=this.TotalPrice;
    tr.appendChild(td);

    return tr;
}