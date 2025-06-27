import React, { useState } from 'react';
import './Photography.css';
import { Link } from 'react-router-dom';

const Photography = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'landscape', name: 'Landscape' },
        { id: 'street', name: 'Street' },
        { id: 'nature', name: 'Nature' },
        { id: 'film', name: 'Film' }
    ];

    const photos = [
        {
            id: 1,
            title: "Big Wave",
            description: "Surfer catching a big wave in Morro Bay, California",
            category: "nature",
            icon: "fas fa-water",
            image: "/images/photography/nature/big-wave.jpg"
        },
        {
            id: 2,
            title: "White Rose",
            description: "White Roses in a garden. Cambria, CA",
            category: "film",
            icon: "fas fa-user",
            image: "/images/photography/film/white-rose.jpg"
        },
        {
            id: 3,
            title: "Blue Mosque",
            description: "Blue Mosque in Istanbul, Turkey",
            category: "street",
            icon: "fas fa-city",
            image: "/images/photography/street/blue-mosque.jpg"
        },
        {
            id: 4,
            title: "Long Road",
            description: "California Highway 1 near San Simeon, CA",
            category: "film",
            icon: "fas fa-leaf",
            image: "/images/photography/film/long-road.jpg"
        },
        {
            id: 5,
            title: "California Coast",
            description: "Sunset over the ocean",
            category: "landscape",
            icon: "fas fa-water",
            image: "/images/photography/landscape/isolation.jpg"
        },
        {
            id: 6,
            title: "Butterfly",
            description: "Yellow butterfly in a garden",
            category: "film",
            icon: "fas fa-leaf",
            image: "/images/photography/film/butterfly.jpg"
        },
        {
            id: 7,
            title: "Port",
            description: "Port town in Turkey",
            category: "street",
            icon: "fas fa-city",
            image: "/images/photography/street/harbor.jpg"
        },
        {
            id: 8,
            title: "Rock Texture",
            description: "Textures of rock and moss",
            category: "nature",
            icon: "fas fa-tree",
            image: "/images/photography/nature/rock-texture.jpg"
        },
        {
            id: 9,
            title: "Sardinian Coast",
            description: "Sardinian Coast, Italy",
            category: "landscape",
            icon: "fas fa-sun",
            image: "/images/photography/landscape/sardinia.jpg"
        },
        {
            id: 10,
            title: "Pacific Coast",
            description: "Pacific Coast near Cambria, CA",
            category: "film",
            icon: "fas fa-eye",
            image: "/images/photography/film/pacific-coast.jpg"
        },
        {
            id: 11,
            title: "Colorful Glass",
            description: "Inside the Blue Mosque",
            category: "street",
            icon: "fas fa-store",
            image: "/images/photography/street/inside-blue-mosque.jpg"
        },
        {
            id: 12,
            title: "Cat",
            description: "Cat on steps",
            category: "street",
            icon: "fas fa-seedling",
            image: "/images/photography/street/cat.jpg"
        }
    ];

    const stats = [
        { number: "500+", label: "Photos Captured" },
        { number: "50+", label: "Locations Visited" },
        { number: "5+", label: "Years Experience" }
    ];

    const equipment = [
        "Sony A6700",
        "Sony 18-135mm/3.5-5.6 Lens",
        "Minolta X-700",
        "Minolta 28mm/2.8 Lens",
        "Adobe Lightroom & Photoshop"
    ];

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
    };

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    const closeLightbox = () => {
        setSelectedPhoto(null);
    };

    const goToPrevious = () => {
        const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto.id);
        const previousIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
        setSelectedPhoto(filteredPhotos[previousIndex]);
    };

    const goToNext = () => {
        const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto.id);
        const nextIndex = currentIndex === filteredPhotos.length - 1 ? 0 : currentIndex + 1;
        setSelectedPhoto(filteredPhotos[nextIndex]);
    };

    const filteredPhotos = activeCategory === 'all' 
        ? photos 
        : photos.filter(photo => photo.category === activeCategory);

    return (
        <div className="photography-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Photography</h1>
                    <p>A small collection of my photography</p>
                </div>
            </section>

            {/* Category Filters */}
            <section className="photography-categories">
                <div className="container">
                    <div className="category-filters">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="photography-gallery">
                <div className="container">
                    <div className="gallery-grid">
                        {filteredPhotos.map(photo => (
                            <div 
                                key={photo.id} 
                                className="photo-item"
                                onClick={() => handlePhotoClick(photo)}
                            >
                                <div className={`photo-placeholder ${photo.category}`}>
                                    {photo.image ? (
                                        <img 
                                            src={photo.image} 
                                            alt={photo.title}
                                            className="photo-image"
                                            onError={(e) => {
                                                // Fallback to icon if image fails to load
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <i 
                                        className={photo.icon}
                                        style={{ display: photo.image ? 'none' : 'flex' }}
                                    ></i>
                                    <div className="photo-overlay">
                                        <h3>{photo.title}</h3>
                                        <p>{photo.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photography Stats */}
            <section className="photography-stats">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <h3>{stat.number}</h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photography About */}
            <section className="photography-about">
                <div className="container">
                    <h2>About My Photography</h2>
                    <p>
                        Photography has been a hobby of mine for over 5 years, allowing me to capture the world's beauty 
                        through my unique perspective. I particularly enjoy taking nature photos, but I also enjoy taking portraits, street, 
                        and landscape photos. I love to take digital photos, but I there is something about film that I love. I enjoy using my 
                        Minolta X-700 to take film photos.
                    </p>
                    <div className="equipment">
                        <h3>Equipment & Tools</h3>
                        <ul>
                            {equipment.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <h2>Want to know more about my Photography?</h2>
                    <p>
                        I'm always excited to discuss my photography with others.
                    </p>
                    <Link smooth to="/#contact" className="btn btn-secondary">Get In Touch</Link>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedPhoto && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeLightbox}>
                            <i className="fas fa-times"></i>
                        </button>
                        
                        {/* Previous Arrow */}
                        <button className="lightbox-nav lightbox-prev" onClick={goToPrevious}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        
                        {/* Next Arrow */}
                        <button className="lightbox-nav lightbox-next" onClick={goToNext}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                        
                        <div className="lightbox-image-container">
                            {selectedPhoto.image ? (
                                <img 
                                    src={selectedPhoto.image} 
                                    alt={selectedPhoto.title}
                                    className="lightbox-image"
                                    onError={(e) => {
                                        // Fallback to icon if image fails to load
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                            ) : null}
                            <i 
                                className={selectedPhoto.icon}
                                style={{ display: selectedPhoto.image ? 'none' : 'flex' }}
                            ></i>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Photography; 