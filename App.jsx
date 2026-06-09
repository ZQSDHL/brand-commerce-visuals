import { useEffect, useState } from 'react'

const portfolioCategories = [
  {
    name: '电商设计',
    summary: '聚焦跨境平台主图、详情页、活动页与套组视觉包装，强调卖点梳理、转化逻辑与品牌质感之间的平衡。',
  },
  {
    name: '商业摄影',
    summary: '围绕产品质感、场景氛围与品牌传播需求，完成适配电商展示和内容渠道的商业影像输出。',
  },
  {
    name: '视频包装',
    summary: '结合平台内容节奏与产品表达重点，优化短视频画面、节奏、信息呈现与传播完成度。',
  },
  {
    name: '本地化页面',
    summary: '面向跨境多语言场景，梳理商品信息层级、卖点结构与页面视觉表达，提升不同市场中的内容理解效率。',
  },
  {
    name: '潮玩文创',
    summary: '围绕潮玩盲盒、文创产品与年轻化视觉语言，梳理系列感、包装展示与社媒传播氛围。',
  },
]

const works = [
  {
    category: '电商设计',
    year: '2024-2025',
    accent: 'Beauty Commerce Visuals',
    title: '美妆电商套组视觉设计',
    description: '围绕美妆套组产品展示需求，完成偏美妆调性的电商视觉包装与页面呈现。',
    image: '/nail-lamp-01.png',
    gallery: [
      '/nail-lamp-01.png',
      '/nail-lamp-02.png',
      '/nail-lamp-03%20(1).png',
      '/nail-lamp-03%20(2).png',
      '/nail-lamp-03%20(3).png',
      '/nail-lamp-03%20(4).png',
      '/nail-lamp-04%20(1).png',
      '/nail-lamp-04%20(2).png',
      '/nail-lamp-04%20(3).png',
      '/nail-lamp-04%20(4).png',
      '/nail-lamp-04%20(5).png',
      '/nail-lamp-04%20(6).png',
      '/nail-lamp-04%20(7).png',
      '/nail-lamp-04%20(8).png',
    ],
  },
  {
    category: '商业摄影',
    year: '2024-2025',
    accent: 'Beauty Photography Direction',
    title: '美妆产品摄影与商业影像',
    description: '以产品摄影为核心，输出适配电商展示与品牌传播的商业静物画面。',
    image: '/beauty-photo-01.JPG',
    gallery: [
      '/beauty-photo-01.JPG',
      '/beauty-photo-01%20(1).JPG',
      '/beauty-photo-01%20(2).JPG',
      '/beauty-photo-01%20(3).JPG',
    ],
  },
  {
    category: '视频包装',
    year: '2024-2025',
    accent: 'Beauty Video Editing',
    title: '美妆短视频内容包装',
    description: '针对美妆产品内容进行视频修改、节奏优化与画面包装，提升传播完成度。',
    video: '/s1-video.mp4',
    poster: '/image%20(19).png',
  },
  {
    category: '本地化页面',
    year: '2024-2025',
    accent: 'Multilingual E-commerce Detail Page',
    title: '电商3C产品详情页',
    description: '围绕 3C 产品详情页展示需求，整理功能卖点、参数信息与页面视觉结构，提升跨境页面的信息表达效率。',
    image: '/wear%20a%20watch.jpg',
    gallery: ['/wear%20a%20watch.jpg', '/wear%20a%20watch-02.jpg', '/wear%20a%20watch-03.jpg'],
    scrollable: true,
  },
  {
    category: '潮玩文创',
    year: '2024-2025',
    accent: 'Designer Toy Visual Design',
    title: '潮玩盲盒视觉设计',
    description: '围绕潮玩盲盒产品的年轻化视觉表达，整理产品卖点、系列感与包装展示逻辑，形成适合电商与社媒传播的视觉呈现。',
    image: '/blind-box-cover%20(1).jpg',
    gallery: [
      '/blind-box-cover%20(1).jpg',
      '/blind-box-cover%20(2).jpg',
      '/blind-box-cover%20(3).jpg',
      '/blind-box-cover%20(4).jpg',
      '/blind-box-cover%20(5).jpg',
      '/blind-box-cover%20(6).jpg',
      '/blind-box-cover%20(7).jpg',
      '/blind-box-cover%20(8).jpg',
      '/blind-box-cover%20(9).jpg',
      '/blind-box-cover%20(10).jpg',
      '/blind-box-cover%20(11).jpg',
      '/blind-box-cover%20(12).jpg',
      '/blind-box-cover%20(13).jpg',
      '/blind-box-cover%20(14).jpg',
      '/blind-box-cover%20(15).jpg',
    ],
  },
]

function WatermarkLayer({ dense = false }) {
  return (
    <div className={`watermark-layer ${dense ? 'dense' : ''}`} aria-hidden="true">
      {Array.from({ length: dense ? 60 : 12 }).map((_, index) => (
        <span key={index}>林杰镜</span>
      ))}
    </div>
  )
}

function VideoPreview({ work }) {
  return (
    <div className="video-poster">
      <img src={work.poster} alt={`${work.title} 视频封面`} loading="lazy" draggable="false" />
      <span className="play-badge">播放视频</span>
    </div>
  )
}

function App() {
  const [selectedWork, setSelectedWork] = useState(null)
  const [selectedImage, setSelectedImage] = useState('')

  useEffect(() => {
    const preventContextMenu = (event) => {
      if (event.target.closest('.work-card, .modal-card')) {
        event.preventDefault()
      }
    }

    document.addEventListener('contextmenu', preventContextMenu)
    return () => document.removeEventListener('contextmenu', preventContextMenu)
  }, [])

  const openWork = (work) => {
    setSelectedWork(work)
    setSelectedImage(work.gallery?.[0] || work.image || '')
  }

  const closeWork = () => {
    setSelectedWork(null)
    setSelectedImage('')
  }

  const selectedGallery = selectedWork?.gallery || []
  const selectedImageIndex = selectedGallery.findIndex((image) => image === selectedImage)

  const showPrevImage = () => {
    if (!selectedGallery.length) return
    const prevIndex = selectedImageIndex <= 0 ? selectedGallery.length - 1 : selectedImageIndex - 1
    setSelectedImage(selectedGallery[prevIndex])
  }

  const showNextImage = () => {
    if (!selectedGallery.length) return
    const nextIndex = selectedImageIndex >= selectedGallery.length - 1 ? 0 : selectedImageIndex + 1
    setSelectedImage(selectedGallery[nextIndex])
  }

  return (
    <div className="page-shell">
      <header className="hero" id="home">
        <div className="ambient ambient-left" />
        <div className="ambient ambient-right" />

        <nav className="topbar">
          <div className="brand">Lin Jiejing Visual Portfolio</div>
          <div className="nav-links">
            <a href="#categories">类目</a>
            <a href="#works">作品</a>
            <a href="#about">简介</a>
            <a href="#contact">联系</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio / Cross-border Visual Design</p>
            <h1>林杰镜的跨境品牌视觉作品集</h1>
            <p className="hero-text">
              高级跨境电商视觉设计师，聚焦品牌视觉、电商视觉、商业摄影与短视频包装，擅长从产品表达、内容传播到平台落地之间建立完整的商业视觉链路。
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#works">查看项目</a>
              <a className="button secondary" href="#contact">联系合作</a>
            </div>

            <div className="metric-row">
              <div className="metric-card">
                <strong>5</strong>
                <span>精选商业视觉项目</span>
              </div>
              <div className="metric-card">
                <strong>Beauty</strong>
                <span>美妆与个护视觉方向</span>
              </div>
              <div className="metric-card">
                <strong>AIGC</strong>
                <span>视觉工作流提效能力</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-column">
            <div className="hero-card">
              <div
                className="hero-image-wrap"
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  padding: '28px',
                  background: 'linear-gradient(135deg, rgba(223,240,230,0.92), rgba(255,239,232,0.92))',
                }}
              >
                <div style={{ textAlign: 'left', width: '100%', color: '#36564c' }}>
                  <span style={{ display: 'inline-block', fontSize: '0.8rem', letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.72 }}>
                    Visual System
                  </span>
                  <h3 style={{ margin: '14px 0 12px', fontSize: '1.9rem', fontFamily: 'Cormorant Garamond, Noto Sans SC, serif' }}>
                    Cross-border Visual Design System
                  </h3>
                  <p style={{ margin: 0, lineHeight: 1.9 }}>
                    围绕跨境电商平台的产品展示、内容传播与品牌表达，建立兼具商业转化与视觉质感的作品集体系。
                  </p>
                </div>
              </div>
              <div className="hero-card-content">
                <span>Visual Direction</span>
                <p>整合电商页面、商业摄影、短视频包装与多语言内容表达，呈现从素材到平台落地的完整视觉能力。</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="categories">
          <div className="section-heading">
            <p className="eyebrow">Portfolio Categories</p>
            <h2>核心视觉能力</h2>
            <p>以真实商业项目为基础，呈现电商设计、商业摄影、视频包装、多语言页面与潮玩文创等主要能力方向。</p>
          </div>

          <div className="process-grid">
            {portfolioCategories.map((item, index) => (
              <article className="process-card" key={item.name}>
                <span className="process-index">0{index + 1}</span>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="works">
          <div className="section-heading">
            <p className="eyebrow">Selected Works</p>
            <h2>精选商业视觉项目</h2>
            <p>选取电商视觉、商业摄影、短视频包装、多语言详情页与潮玩盲盒项目，呈现从产品表达到平台落地的视觉设计能力。点击项目卡片可查看详情图库。</p>
          </div>

          <div className="works-grid">
            {works.map((work) => (
              <article className="work-card clickable" key={`${work.title}-${work.year}`} onClick={() => openWork(work)}>
                <div className={`work-image-wrap ${work.scrollable ? 'scrollable-image' : ''}`}>
                  {work.video ? (
                    <VideoPreview work={work} onClick={(event) => event.stopPropagation()} />
                  ) : (
                    <img src={work.image} alt={work.title} draggable="false" />
                  )}
                  <WatermarkLayer />
                  <div className="work-overlay">点击查看详情</div>
                </div>
                <div className="work-meta">
                  <div className="work-topline">
                    <span className="tag">{work.category}</span>
                    <span className="year">{work.year}</span>
                  </div>
                  <p className="accent-line">{work.accent}</p>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <h2>品牌视觉策划 / 电商视觉设计师</h2>
            <p>林杰镜，高级跨境电商视觉设计师，拥有 3 年全链路品牌视觉经验。擅长整合商业摄影、视频拍摄与剪辑、三维建模渲染、包装视觉体系以及平台终端页面设计。</p>
            <p>目前的项目方向覆盖跨境美妆、个护、消费电子与多语言电商内容，在品牌调性、电商转化与内容传播之间寻找更平衡、更完整的成品输出方式。</p>
          </div>
          <div className="about-panel">
            <div>
              <span className="panel-label">项目方向</span>
              <p>电商视觉设计 / 商业摄影 / 视频修改与内容包装 / 品牌视觉延展</p>
            </div>
            <div>
              <span className="panel-label">行业沉淀</span>
              <p>3C 消费电子、潮玩文创、美妆个护等跨境电商品类</p>
            </div>
            <div>
              <span className="panel-label">平台语境</span>
              <p>Amazon / TikTok Shop / Temu / eBay / 多语言本地化页面</p>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <p className="eyebrow">Contact</p>
            <h2>欢迎联系合作或索取更多项目案例</h2>
            <p>如需进一步了解项目经验、获取更多案例展示或沟通合作方向，可以通过以下方式联系我。</p>
            <div className="contact-actions">
              <a className="button primary" href="mailto:3439520070@qq.com">3439520070@qq.com</a>
              <a className="button secondary" href="#home">回到顶部</a>
            </div>
          </div>
        </section>
      </main>

      {selectedWork ? (
        <div className="modal-backdrop" onClick={closeWork}>
          <div className={`modal-card ${selectedWork.scrollable ? 'long-detail-card' : ''}`} onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={closeWork}>关闭</button>
            <div className="modal-layout">
              <div>
                <div className={`modal-image-wrap ${selectedWork.scrollable ? 'scrollable-detail' : ''}`}>
                  {selectedWork.video ? (
                    <video src={selectedWork.video} controls playsInline poster={selectedWork.poster} draggable="false" controlsList="nodownload" />
                  ) : (
                    <>
                      <img src={selectedImage} alt={selectedWork.title} draggable="false" />
                      <WatermarkLayer dense={selectedWork.scrollable} />
                      {selectedGallery.length > 1 ? (
                        <>
                          <button className="gallery-nav prev" type="button" onClick={showPrevImage}>上一张</button>
                          <button className="gallery-nav next" type="button" onClick={showNextImage}>下一张</button>
                          <div className="gallery-counter">{selectedImageIndex + 1} / {selectedGallery.length}</div>
                        </>
                      ) : null}
                    </>
                  )}
                </div>
                {selectedGallery.length > 1 ? (
                  <div className="gallery-thumbs">
                    {selectedGallery.map((image) => (
                      <button className={`gallery-thumb ${selectedImage === image ? 'active' : ''}`} key={image} type="button" onClick={() => setSelectedImage(image)}>
                        <img src={image} alt={`${selectedWork.title} 缩略图`} draggable="false" />
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="modal-content">
                <p className="modal-accent">{selectedWork.accent}</p>
                <h3>{selectedWork.title}</h3>
                <p className="modal-summary">{selectedWork.description}</p>
                <div className="modal-info-row">
                  <div>
                    <span className="panel-label">项目类别</span>
                    <p>{selectedWork.category}</p>
                  </div>
                  <div>
                    <span className="panel-label">项目年份</span>
                    <p>{selectedWork.year}</p>
                  </div>
                  <div>
                    <span className="panel-label">查看方式</span>
                    <p>{selectedWork.video ? '视频可直接播放。' : selectedWork.scrollable ? '当前项目为长图详情页模式，可直接向下滚动查看完整页面。' : selectedGallery.length > 1 ? '点击上一张、下一张或下方缩略图可切换项目图片。' : '当前项目已接入单张代表图，后续可继续补充图库图片。'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
