import React from 'react'
import '../src/css/Home.css'

export default function Home() {
    return (
        <div>
            <div id="demo" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    <li data-target="#demo" data-slide-to="3"></li>
                    <li data-target="#demo" data-slide-to="4"></li>
                    <li data-target="#demo" data-slide-to="5"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://icms-image.slatic.net/images/ims-web/49601a5c-8bac-4c20-afac-0b3d61164079.jpg" width="1500" height="350" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/d9f331e1-2dfb-462b-a22c-04ff4bb5509c.jpg_2200x2200q90.jpg_.webp" width="1500" height="350" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/d195c1e7-4f0d-460d-be83-152e5558d934.jpg_2200x2200q90.jpg_.webp" width="1500" height="350" />

                    </div>
                    <div class="carousel-item">
                        <img src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/4eafa09b-7d24-4802-8481-006dc868f522.jpg_2200x2200q90.jpg_.webp" width="1500" height="350" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/d5e4d073-b5a1-464e-89f2-3a39b4cc36a2.jpg_2200x2200q90.jpg_.webp" width="1500" height="350" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/d3135a78-64e4-473c-bb1c-e4cb393fc00b.jpg_2200x2200q90.jpg_.webp" width="1500" height="350" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>

               
            </div>
            <div className="single-btn">
            <button><img src="https://icms-image.slatic.net/images/ims-web/9d78cd14-05ee-43ba-a360-61f895a70aef.png"/>LazMall</button>
            <button><img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12wVshUT1gK0jSZFhXXaAtVXa.png"/>คูปองลดเพิ่ม</button>
            <button><img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB11DFthO_1gK0jSZFqXXcpaXXa.png"/>เติมเงิน&อาหาร</button>
            <button><img src="https://icms-image.slatic.net/images/ims-web/a13d12e1-91d1-4240-b22f-46233a012e89.png"/>LazBlog</button>
            <button><img src="https://img.alicdn.com/imgextra/i1/O1CN01yvjCS71LsB10MJoJt_!!6000000001354-2-tps-150-150.png"/>ร้านค้าแนะนำ</button>
        </div>
      
        </div>
    )
}