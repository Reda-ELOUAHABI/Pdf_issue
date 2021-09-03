
// let area= document.getElementById('area').innerHTML("coucou");
function myFunction2() {


    const input = document.getElementById('html-content');
    
    // const area= document.getElementById('area').innerHTML("coucou");
    var opt = {
          margin:       1,
          filename:     'myfile.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
        //   html2canvas:  { scale: 2 },
        html2canvas: { 
            //scale: 12, 
            //width : pdf.internal.pageSize.getWidth(),
            //height : (imgProps.height * pdfWidth) / imgProps.width,
        },
        jsPDF: {
            unit: 'in', format: 'letter', orientation: 'portrait'
            // format: 'a5',
            // unit: 'px',
        }
    };
    
    html2pdf().set(opt).from(input).save();
alert("akk");
}
