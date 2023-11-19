type PayLoadBody = {
  [key: string]: {
    [key: string]:
      | string
      | number
      | number[]
      | { [key: string]: string | number }
      | {};
  };
};

export const PayLoadBody: PayLoadBody = {
  Home: {
    id: 1,
    name: "My homepage",
    slug: "home",
    seo_data: {
      meta_title: "Hompage meta data update",
      meta_description: "Hompage meta description update",
      meta_keywords: "Hompage meta keywords update",
      meta_thumbnail: "https://wwww.domain.com", // image url
    },
    meta_data: {
      people_and_planet: {},
    },
  },
  AboutUs: {
    id: 3,
    name: "About us",
    slug: "about-us",
    description: "Page Description",
    short_description: "Page Short Description",
    featured_image: "", // full image url,
    seo_data: {
      meta_title: "About Meta title",
      meta_description: "About Meta description",
      meta_keywords: "About Meta keyword",
      meta_thumbnail: "",
    },
    meta_data: {},
  },
  ContactUs: {
    id: 4,
    name: "Contact us",
    slug: "contact",
    status: "publish",
    description: "Page Description",
    seo_data: {
      meta_title: "Contact",
      meta_description: "",
      meta_keywords: "",
      meta_thumbnail: "",
      add_user: "",
      update_user: "",
    },
    meta_data: {},
  },

  Career: {
    id: 17,
    name: "Careers",
    slug: "careers",
    status: "publish",
    seo_data: {
      meta_title: "Careers",
      meta_description: "",
      meta_keywords: "",
      meta_thumbnail: "",
      add_user: "",
      update_user: "",
    },
    meta_data: {},
  },

  PeoplePlant: {
    id: 2,
    name: "People & Planet",
    slug: "csr",
    status: "1",
    seo_data: {
      meta_title: "People & Planet",
      meta_description: "",
      meta_keywords: "",
      meta_thumbnail: "",
      add_user: "",
      update_user: "",
    },
    meta_data: {},
    related_ids: [65333],
  },

  Business: {
    id: 18,
    name: "Our Businesses",
    status: "1",
    slug: "our-businesses",
    seo_data: {
      meta_title: "Our Businesses",
      meta_description: "",
      meta_keywords: "",
      meta_thumbnail: "",
      add_user: "",
      update_user: "",
    },
    meta_data: {},
    related_ids: [65333],
  },

  Supply_Chain: {
    id: 11,
    name: "Supply Chain",
    slug: "supply-chain",
    status: "1",
    seo_data: {
      meta_title: "Supply Chain",
      meta_description: "",
      meta_keywords: "",
      meta_thumbnail: "",
      add_user: "",
      update_user: "",
    },
    meta_data: {},
  },

  Fashion: {
    id: 6,
    name: "Fashion",
    status: "1",
    slug: "fashion",
    seo_data: {
      meta_title: "Fashion",
      meta_description: "",
      meta_keywords: "",
      meta_thumbnail: "",
      add_user: "",
      update_user: "",
    },
    meta_data: {},
  },
};
