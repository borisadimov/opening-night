let storeInstance;

export default function getStore () {
  if (!storeInstance)
    storeInstance = new Store();

  return storeInstance;
}

class Store {
  //=============sections' elements=================

  SECTION_CAST = 0;
  SECTION_REVIEWS = 1;
  SECTION_CLIPS = 2;
  SECTION_CONTEST = 3;

  sectionReviews;
  sectionClips;
  sectionContest;

  onReady() {
    this.sectionReviews = document.querySelector('.slider');
    this.sectionClips = document.querySelector('.video');
    this.sectionContest = document.querySelector('.download');
  }


  //========sizes===========

  get isMobile() {return window.innerWidth <= 510;}
  get isTablet() {return window.innerWidth <= 768 && !this.isMobile;}
  get isIPad() {return navigator.userAgent.match(/iPad/i) != null;}
  get isIPhone() {return navigator.platform.match(/i(Phone|Pod)/i);}



  //========videos===========

  TYPE_YOUTUBE = "TYPE_YOUTUBE";
  TYPE_GIPHY = "TYPE_GIPHY";

  mainVideos = [
    {
      type: this.TYPE_YOUTUBE,
      id: "Tlm3Zeylt4c",
      preview: "assets/images/video-1.png",
      text: "DANCE OFF"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "BtWAz-tROHg",
      preview: "assets/images/video-2.png",
      text: "MAMBO #5"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "yDAn6EcKMwM",
      preview: "assets/images/video-3.png",
      text: "THE BATTLE IS ON"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "HN3xlrJlT1Y",
      preview: "assets/images/video-4.png",
      text: "ZIP CODE RATINGS"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "RKh0gELr3ok",
      preview: "assets/images/video-3.png",
      text: "NO DRUGS NEEDED"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "gPEv9s3ZiPE",
      preview: "assets/images/video-4.png",
      text: "RUFIED A STAR!"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "MkWN1u4t_ys",
      preview: "assets/images/video-3.png",
      text: "CALM THE F*$K DOWN"
    }
  ];

  charVideos = [
    {
      id: 'rob',
      name: 'Rob Riggle',
      videos: [
        {
          type: this.TYPE_GIPHY,
          id: "MKkP23Dnbo1fa",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "yMZ142siF9tDi",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "rob-riggle-opening-night-the-movie-qwpaw2s7cxTq0",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "dGP40z5sB4w",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'anne',
      name: 'Anne Heche',
      videos: [
        {
          type: this.TYPE_GIPHY,
          id: "OSXrxGfHH0FSU",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "OQzy9a55nFG6s",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "3dskJKNRrm8",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "shhvCknE-ZQ",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'topher',
      name: 'Topher Grace',
      videos: [
        {
          type: this.TYPE_YOUTUBE,
          id: "MlnmQJPXESo",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "gPEv9s3ZiPE",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "IrDAGYR5qg8",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "M-XZxVPgapc",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'alona',
      name: 'Alona Tal',
      videos: [
        {
          type: this.TYPE_YOUTUBE,
          id: "P6lbttuKFEQ",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "8rSoWa9ZDMM",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "RGIu7LwleMc",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "MafxR_fldAc",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'jc',
      name: 'J. C. Chasez',
      videos: [
        {
          type: this.TYPE_YOUTUBE,
          id: "gx1lZ_FJT7U",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "iF7tJ22IuCGUo",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "SQeCOm6rR54",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "ubucDktGmao",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'taye',
      name: 'Taye Diggs',
      videos: [
        {
          type: this.TYPE_YOUTUBE,
          id: "DEuM8R3v1Pw",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "11sU92GtTeaMCs",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "jjKZt5_dVTA",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "MHgE0D8tHgmQ",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'paul',
      name: 'Paul Scheer',
      videos: [
        {
          type: this.TYPE_YOUTUBE,
          id: "CAcLwDoZJvs",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "u50htgqvR1w",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "RKh0gELr3ok",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "ScocTftN8QU",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'lesli',
      name: 'Lesli Margherita',
      videos: [
        {
          type: this.TYPE_YOUTUBE,
          id: "aqSjQQDwXw8",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "5tWEQBwhGr0",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "6q8Qzj66XD0",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "Ya5W3okQxa0",
          preview: "assets/images/video-4.png"
        }
      ]
    }
  ];

  getVideoURL(video) {
    switch (video.type) {
      case this.TYPE_YOUTUBE:  return `https://www.youtube.com/watch?v=${video.id}`;
      case this.TYPE_GIPHY:    return `https://giphy.com/gifs/${video.id}`;
    }
  }

  getFBVideoPost(video) {
    let videoURL = this.getVideoURL(video);
    return `https://www.facebook.com/sharer/sharer.php?u=${videoURL}`;
  }

  getTWVideoPost(video) {
    let videoURL = this.getVideoURL(video);
    return `https://twitter.com/intent/tweet?text=Check%20this%20out!&amp;hashtags=OpeningNight&amp;url=${videoURL}`;
  }

  openSocialPopup(url, title = 'Social Share') {
    let intWidth = '560';
    let intHeight = '430';

    let strParam = `width=${intWidth},height=${intHeight},resizable=yes`;
    window.open(url, title, strParam).focus();
  }
}
