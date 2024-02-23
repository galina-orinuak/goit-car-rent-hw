import { Searchbar } from './Searchbar/Searchbar';
import { fetchAll } from 'services/api';
import { useState, useEffect } from 'react';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
// import { fetchImages } from 'services/fetchImages';

export const App =() => {
  
  const [carsList, setCarsList] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    fetchAll()
      .then(data => {
        setCarsList(data.results);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setShowLoader(false);
      });
  }, []);
  
    return (
      <>
      {!showLoader && <Loader />}
        <Searchbar onSubmitForm={this.onSubmitForm} />
      
        {carsList.map((car) => (
        <img key={car.id} src={car.url} alt={car.title} width={100} />
      ))}
        {/* <ImageGallery
          images={this.state.galerryArr}
          showModal={this.showModal}
          showImg={this.showImg}
        />
        {this.state.showBtn && <Button onClick={this.onButtomLoadMOre} />}
        {this.state.showLoader && <Loader />}
        {this.state.showModal && (
          <Modal showImg={this.state.showImg} hideModal={this.hideModal} />
        )} */}
      </>
    );
  }



