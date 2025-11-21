// Certificate Image Viewer
document.querySelectorAll(".certificates img").forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("img-modal");
    modal.innerHTML = `<span>&times;</span><img src="${img.src}" alt="certificate">`;
    document.body.appendChild(modal);

    modal.querySelector("span").addEventListener("click", () => {
      modal.remove();
    });
  });
});

// Modal CSS dynamically
const style = document.createElement("style");
style.innerHTML = `
  .img-modal {
    position:fixed;
    top:0; left:0; right:0; bottom:0;
    background:rgba(0,0,0,0.8);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:1000;
  }
  .img-modal img {
    max-width:90%;
    max-height:90%;
    border-radius:10px;
  }
  .img-modal span {
    position:absolute;
    top:20px; right:40px;
    font-size:40px;
    color:white;
    cursor:pointer;
    font-weight:bold;
  }
`;
document.head.appendChild(style);
