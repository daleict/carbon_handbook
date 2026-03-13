export type AboutLocale = 'en' | 'vi'

export interface LocalizedText {
  en: string
  vi: string
}

export interface TeamMember {
  name: string
  initials: string
  image?: string
  profileUrl?: string
  title: LocalizedText
  organization?: LocalizedText
}

export interface FocusArea {
  icon: string
  title: LocalizedText
  description: LocalizedText
}

export interface Partner {
  name: string
  image: string
  website?: string
  description: LocalizedText
}

export interface AboutPageCopy {
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryAction: string
    secondaryAction: string
    summaryTitle: string
    summaryDescription: string
    institutionsLabel: string
    focusLabel: string
  }
  leaders: {
    eyebrow: string
    title: string
    description: string
  }
  editors: {
    eyebrow: string
    title: string
  }
  focus: {
    eyebrow: string
    title: string
  }
  partners: {
    eyebrow: string
    title: string
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    action: string
  }
  mockupLabel: string
}

export interface LocalizedTeamMember {
  name: string
  initials: string
  image?: string
  profileUrl?: string
  title: string
  organization?: string
}

export interface LocalizedFocusArea {
  icon: string
  title: string
  description: string
}

export interface LocalizedPartner {
  name: string
  image: string
  website?: string
  description: string
}

export const aboutPageCopy: Record<AboutLocale, AboutPageCopy> = {
  en: {
    hero: {
      eyebrow: 'Carbon market handbook',
      title: 'About Us',
      description: 'This page introduces the team and partner institutions behind the Carbon Market Handbook. The handbook is designed to help Vietnamese SMEs build practical understanding of carbon credits, MRV, green finance, and market readiness.',
      primaryAction: 'Explore the handbook',
      secondaryAction: 'Vietnamese version',
      summaryTitle: 'Editorial frame',
      summaryDescription: 'The handbook combines interdisciplinary academic leadership with practical support for carbon market readiness in Vietnam.',
      institutionsLabel: 'Supporting institutions',
      focusLabel: 'Core focus areas',
    },
    leaders: {
      eyebrow: 'Editorial leadership',
      title: 'Co-Chairs and Editors',
      description: 'A cross-disciplinary team shaped the handbook with expertise in climate economics, public policy, sustainable finance, and implementation support.',
    },
    editors: {
      eyebrow: 'Editorial team',
      title: 'Other Editors',
    },
    focus: {
      eyebrow: 'How we work',
      title: 'From research to practical adoption',
    },
    partners: {
      eyebrow: 'Partner organizations',
      title: 'Supporting Institutions',
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Work with the handbook team',
      description: 'For partnership, implementation support, or handbook inquiries, contact the editorial team directly.',
      action: 'Email the team',
    },
    mockupLabel: 'Mockup image',
  },
  vi: {
    hero: {
      eyebrow: 'Sổ tay thị trường carbon',
      title: 'Về Chúng Tôi',
      description: 'Trang này giới thiệu đội ngũ thực hiện và các đơn vị đồng hành phía sau Sổ tay Thị trường Carbon. Sổ tay được xây dựng để hỗ trợ doanh nghiệp SME Việt Nam hiểu rõ hơn về tín chỉ carbon, MRV, tài chính xanh và lộ trình sẵn sàng tham gia thị trường.',
      primaryAction: 'Khám phá sổ tay',
      secondaryAction: 'English version',
      summaryTitle: 'Khung biên tập',
      summaryDescription: 'Sổ tay được phát triển từ sự phối hợp giữa nhóm chuyên gia liên ngành và các đối tác hỗ trợ năng lực sẵn sàng tham gia thị trường carbon tại Việt Nam.',
      institutionsLabel: 'Đơn vị đồng hành',
      focusLabel: 'Trọng tâm triển khai',
    },
    leaders: {
      eyebrow: 'Đội ngũ chủ trì',
      title: 'Đồng Chủ Trì và Biên Tập',
      description: 'Sổ tay được định hình bởi nhóm chuyên gia liên ngành với kinh nghiệm trong kinh tế khí hậu, chính sách công, tài chính bền vững và hỗ trợ triển khai thực tế.',
    },
    editors: {
      eyebrow: 'Nhóm biên tập',
      title: 'Các Biên Tập Khác',
    },
    focus: {
      eyebrow: 'Cách chúng tôi triển khai',
      title: 'Từ nghiên cứu đến ứng dụng thực tiễn',
    },
    partners: {
      eyebrow: 'Tổ chức đồng hành',
      title: 'Đơn Vị Thực Hiện',
    },
    contact: {
      eyebrow: 'Liên hệ',
      title: 'Kết nối với nhóm thực hiện sổ tay',
      description: 'Nếu bạn cần hợp tác, hỗ trợ triển khai hoặc trao đổi thêm về sổ tay, hãy liên hệ trực tiếp với nhóm biên tập.',
      action: 'Gửi email cho nhóm',
    },
    mockupLabel: 'Hình ảnh minh họa',
  },
}

export const aboutLeadership: TeamMember[] = [
  {
    name: 'TS. Lê Duy Anh',
    initials: 'LA',
    image: '/duy_anh.webp',
    profileUrl: 'https://vinuni.edu.vn/vi/people/ts-le-duy-anh/',
    title: {
      en: 'Program Director, Lecturer in Economics',
      vi: 'Giám đốc chương trình, Giảng viên Kinh tế học',
    },
    organization: {
      en: 'VinUniversity',
      vi: 'VinUniversity',
    },
  },
  {
    name: 'PGS.TS Vũ Anh Dũng',
    initials: 'VD',
    image: '/vu_anh_dung.webp',
    profileUrl: 'https://vinuni.edu.vn/vi/people/pgs-ts-vu-anh-dzung/',
    title: {
      en: 'Founding Dean, College of Arts and Sciences',
      vi: 'Viện trưởng sáng lập Viện Khoa học và Giáo dục Khai phóng',
    },
    organization: {
      en: 'VinUniversity',
      vi: 'VinUniversity',
    },
  },
  {
    name: 'TS. Trương Thu Hà',
    initials: 'TH',
    image: '/truong_thu_ha.webp',
    profileUrl: 'https://ueb.edu.vn/Don-Vi-Giang-Vien/UEB/TS-TRUONG-THU-HA-/1873/1931/31354',
    title: {
      en: 'Lecturer, Department of Public Policy',
      vi: 'Giảng viên Bộ môn Chính sách công',
    },
    organization: {
      en: 'VNU University of Economics and Business',
      vi: 'Trường Đại học Kinh tế, Đại học Quốc gia Hà Nội',
    },
  },
]

export const aboutEditors: TeamMember[] = [
  {
    name: 'ThS. Trần Diệu Anh',
    initials: 'TT',
    profileUrl: 'https://vinuni.edu.vn/faculty/ths-tran-dieu-anh',
    title: {
      en: 'MA, Chulalongkorn University',
      vi: 'MA, Chulalongkorn University',
    },
  },
  {
    name: 'ThS. Trần Anh Khoa',
    initials: 'TA',
    profileUrl: 'https://vinuni.edu.vn/faculty/ths-tran-anh-khoa',
    title: {
      en: 'PhD candidate, INSEAD',
      vi: 'Nghiên cứu sinh Tiến sĩ, INSEAD',
    },
  },
  {
    name: 'Nguyễn Minh Khuê',
    initials: 'NM',
    profileUrl: 'https://vinuni.edu.vn/faculty/nguyen-minh-khue',
    title: {
      en: 'VinUniversity',
      vi: 'VinUniversity',
    },
  },
  {
    name: 'Trần Thị Hồng Phúc',
    initials: 'TT',
    profileUrl: 'https://vinuni.edu.vn/faculty/tran-thi-hong-phuc',
    title: {
      en: 'VinUniversity',
      vi: 'VinUniversity',
    },
  },
  {
    name: 'Lê Thiên Hà Ngân',
    initials: 'LT',
    profileUrl: 'https://vinuni.edu.vn/faculty/le-thien-ha-ngan',
    title: {
      en: 'VinUniversity',
      vi: 'VinUniversity',
    },
  },
  {
    name: 'Tony Tin',
    initials: 'TT',
    title: {
      en: 'Technical Advisor',
      vi: 'Cố vấn kỹ thuật',
    },
  },
]

export const aboutFocusAreas: FocusArea[] = [
  {
    icon: 'i-lucide-globe-2',
    title: {
      en: 'International collaboration framework',
      vi: 'Khung hợp tác quốc tế',
    },
    description: {
      en: 'Combining academic, financial, and governance expertise to strengthen carbon market readiness.',
      vi: 'Kết nối học thuật, tài chính và quản trị để nâng cao năng lực sẵn sàng tham gia thị trường carbon.',
    },
  },
  {
    icon: 'i-lucide-landmark',
    title: {
      en: 'Green finance capability',
      vi: 'Năng lực tài chính xanh',
    },
    description: {
      en: 'Linking handbook content to green credit, MRV processes, and transparent disclosure practices.',
      vi: 'Gắn nội dung sổ tay với tín dụng xanh, quy trình MRV và thực hành công bố minh bạch.',
    },
  },
  {
    icon: 'i-lucide-briefcase-business',
    title: {
      en: 'Practical implementation support',
      vi: 'Hỗ trợ triển khai thực tế',
    },
    description: {
      en: 'Helping SMEs through training, applied research, and practical implementation examples.',
      vi: 'Hỗ trợ doanh nghiệp SME thông qua đào tạo, nghiên cứu ứng dụng và các ví dụ triển khai thực tế.',
    },
  },
]

export const aboutPartners: Partner[] = [
  {
    name: 'VinUniversity',
    image: '/vin_uni.webp',
    website: 'https://vinuni.edu.vn/',
    description: {
      en: 'A leading private university in Vietnam.',
      vi: 'Trường đại học tư thục hàng đầu tại Việt Nam.',
    },
  },
  {
    name: 'British Council',
    image: '/british-council.webp',
    website: 'https://www.britishcouncil.vn/',
    description: {
      en: 'The international organization for cultural relations and educational opportunities.',
      vi: 'Tổ chức quốc tế của Vương quốc Anh về quan hệ văn hóa và cơ hội giáo dục.',
    },
  },
]

export const aboutContactEmail = 'anh.ld@vinuni.edu.vn'

export function localizeAboutText(text: LocalizedText, locale: AboutLocale) {
  return locale === 'vi' ? text.vi : text.en
}

function localizeTeamMember(member: TeamMember, locale: AboutLocale): LocalizedTeamMember {
  return {
    name: member.name,
    initials: member.initials,
    image: member.image,
    profileUrl: member.profileUrl,
    title: localizeAboutText(member.title, locale),
    organization: member.organization ? localizeAboutText(member.organization, locale) : undefined,
  }
}

function localizeFocusArea(area: FocusArea, locale: AboutLocale): LocalizedFocusArea {
  return {
    icon: area.icon,
    title: localizeAboutText(area.title, locale),
    description: localizeAboutText(area.description, locale),
  }
}

function localizePartner(partner: Partner, locale: AboutLocale): LocalizedPartner {
  return {
    name: partner.name,
    image: partner.image,
    website: partner.website,
    description: localizeAboutText(partner.description, locale),
  }
}

export function getAboutPageContent(locale: AboutLocale) {
  return {
    copy: aboutPageCopy[locale],
    coChairs: aboutLeadership.map(member => localizeTeamMember(member, locale)),
    editors: aboutEditors.map(member => localizeTeamMember(member, locale)),
    focusAreas: aboutFocusAreas.map(area => localizeFocusArea(area, locale)),
    partners: aboutPartners.map(partner => localizePartner(partner, locale)),
    contactEmail: aboutContactEmail,
  }
}
