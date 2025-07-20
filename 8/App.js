// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import BookingForm from "./components/BookingForm";
import BookingConfirmation from "./components/BookingConfirmation";

const App = () => {
  const movies = [
    
  {
      id: 1,
      title: "12th fail",
      image:
        "https://imgs.search.brave.com/FOuB5BjdaKLZYi7AW-1WITKjQdK3U6pRK8mwaDJiNcg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtaW4uYm1zY2Ru/LmNvbS9pZWRiL21v/dmllcy9pbWFnZXMv/bW9iaWxlL3RodW1i/bmFpbC94bGFyZ2Uv/MTJ0aC1mYWlsLWV0/MDAzNjM3ODctMTY5/ODMxNjEzOC5qcGc",
      description:
        "12th Fail is an upcoming Indian Hindi-language drama film directed by Abhishek Pathak. The film is based on the true story of Yashpal Saxena, a young man who aspires to become a civil servant despite failing his 12th-grade examinations multiple times.",
    },
  {
    id: 2,
    title: "3 Idiots",
    image:
      "https://imgs.search.brave.com/onH3fPKbqy854WJEWfe7tDxOzSa4uIpr8XR1FeS1Nsk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDI1L21heS9t/dXN0LXdhdGNoLWJv/bGx5d29vZC1tb3Zp/ZS0zLWlkaW90cy5q/cGc",
    description: "3 Idiots is a 2009 Indian comedy-drama film directed by Rajkumar Hirani. The film follows the story of three engineering students and their pursuit of happiness, challenging the conventional education system and societal expectations."
  },
  {
    id: 3,
    title: "Andhadhunn",
    image:
      "https://imgs.search.brave.com/aylApsviqDNXi1ozE4f8Yv6qekl5N0_9d_AAqVNjh8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDI1L21heS9t/dXN0LXdhdGNoLWJv/bGx5d29vZC1tb3Zp/ZS1hbmRoYWRodW4u/anBn",
    description: "Andhadhun is a 2018 Indian black comedy thriller film directed by Sriram Raghavan. The film follows the life of a blind pianist who becomes embroiled in a dangerous situation, blurring the lines between reality and deception."
  },
    {
      id: 4,
      title: "Queen",
      image:
        "https://imgs.search.brave.com/3jEqlSWSGVcYg_ECrPLsVJJoK19_l6zP2e4PXUKH96s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYXlv/dGZpbG1zLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8x/MS9RdWVlbi1Cb2xs/eXdvb2QtTW92aWUu/anBnLndlYnA",
      description:
        "Queen is a 2014 Indian comedy-drama film directed by Vikas Bahl. The film follows the story of a young woman who embarks on a solo honeymoon trip to Paris and Amsterdam after her fiancé calls off their wedding, leading to her self-discovery and personal growth.",
    },
    {
      id: 5,
      title: "Tamasha",
      image:
        "https://imgs.search.brave.com/UYe21dfWYa-ECxeEeYRJtKlacey4Ao1zaF8FXL5SDak/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYXlv/dGZpbG1zLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8x/MS9UYW1hc2hhLUJv/bGx5d29vZC1Nb3Zp/ZS5qcGcud2VicA",
      description:
        "Tamasha is a 2015 Indian romantic drama film directed by Imtiaz Ali. The film explores the life of a young man who is stuck in a corporate job, longing to break free and rediscover his true self, and the role a woman plays in his journey of self-discovery.",
    },
    {
      id: 6,
      title: "Super 30",
      image:
        "https://imgs.search.brave.com/g8eYzbes2hnzDu_1DTMwB9y1U7AG1o7XCnPUhsnwEVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDI1L21heS9t/dXN0LXdhdGNoLWJv/bGx5d29vZC1tb3Zp/ZS1zdXBlci0zMC5q/cGc",
      description:
        "Super 30 is a 2019 Indian biographical drama film directed by Vikas Bahl. The film is based on the life of Anand Kumar, a mathematician who runs the Super 30 program in Patna, Bihar, which coaches underprivileged students for the IIT-JEE entrance examination.",
    },
    {
    id: 7,
    title: "Dil Chahta Hai",
    image:
      "https://imgs.search.brave.com/gBFfITlvS4Re4fdn7sK6h4-CnsgQB4nK8LOM-n3e0XA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDI1L21heS9t/dXN0LXdhdGNoLWJv/bGx5d29vZC1tb3Zp/ZS1kaWwtY2hhaHRh/LWhhaS5qcGc",
    description: "Dil Chahta Hai is a 2001 Indian coming-of-age comedy-drama film written and directed by Farhan Akhtar. The film follows the lives of three young friends navigating the complexities of relationships and self-discovery in modern-day Mumbai."
  },
    {
      id: 8,
      title: "Article 15",
      image:
        "https://imgs.search.brave.com/fdNP4A3H8BdOpe70PbI5ZZYlVExbCa6PEaORdS6PS1A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDI1L21heS9t/dXN0LXdhdGNoLWJv/bGx5d29vZC1tb3Zp/ZS1hcnRpY2xlLTE1/LmpwZw",
      description:
        "Article 15 is a 2019 Indian crime drama film directed by Anubhav Sinha. The film is inspired by the Badaun rape case and explores the issue of caste discrimination in India, following an urban police officer who investigates the disappearance of two young girls from a village.",
    },
    {
      id: 9,
      title: "Inception",
      image:
        "https://imgs.search.brave.com/RVWiCbQyXi8zcLhmVPc_ggsmae4ocdIf2FoWXTpvg_8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF1S00rTGRnRkwu/anBn",
      description:
        "Inception is a 2010 science fiction action film written and directed by Christopher Nolan. The film follows a professional thief who specializes in stealing corporate secrets through the use of dream-sharing technology, and is given the chance to have his criminal record erased as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious.",
    },
    {
      id: 10,
      title: "Interstellar",
      image:
        "https://imgs.search.brave.com/-HvlbWskgjTusKiohCxZIt2iIEWDLrax25cHQ9IlNsA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZlLzVm/L2E1L2ZlNWZhNTFm/NTg1NjFjMGNjNTc4/YmY5MThjMDlkOWU5/LmpwZw",
      description:
        "Interstellar is a 2014 science fiction film directed by Christopher Nolan. The film follows a group of astronauts and scientists who travel through a newly discovered wormhole in search of habitable planets, as Earth's environment is dying due to a blight and dust storms.",
    },
    {
      id: 11,
      title: "Oppenheimer",
      image:
        "https://imgs.search.brave.com/IjTIgjEY_3Cpi2u9YnpgZDuDa6zGejs9S-NNRCeUong/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/NC80YS9PcHBlbmhl/aW1lcl8oZmlsbSku/anBnLzI1MHB4LU9w/cGVuaGVpbWVyXyhm/aWxtKS5qcGc",
      description:
        "Oppenheimer is an upcoming 2023 American historical drama film written and directed by Christopher Nolan. The film is based on the life of J. Robert Oppenheimer, the theoretical physicist who was a key figure in the Manhattan Project, the research and development program that led to the creation of the first atomic bombs during World War II.",
    },
    {
      id: 12,
      title: "Avengers",
      image:
        "https://imgs.search.brave.com/ZCih775slV12gYUUkeIInh_iZCDeVL8B3ZZ38i5Ycg0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yy9jMC9BdmVuZ2Vy/c18yMDIwX2NvdmVy/X2FydC5wbmcvMjUw/cHgtQXZlbmdlcnNf/MjAyMF9jb3Zlcl9h/cnQucG5n",
      description:
        "The Avengers is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. The film is the sixth installment in the Marvel Cinematic Universe and brings together the superheroes Iron Man, the Hulk, Thor, Captain America, Black Widow, and Hawkeye to form the Avengers and save the world from the villainous Loki and his alien army.",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        <Route path="/book/:id" element={<BookingForm movies={movies} />} />
        <Route path="/confirmation/:id" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
