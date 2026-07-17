export const student = {
  name: "Phạm Minh Đức",
  studentId: "25040047",
  school: "Trường Đại học Ngoại ngữ",
  major: "Sư phạm Anh",
  faculty: "Khoa Ngôn ngữ và Văn hóa Anh",
  email: "phamduc007duc@gmail.com",
  course: "Nhập môn Công nghệ số và sử dụng trí tuệ nhân tạo",
};

export type Assignment = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  focus: string;
  accent: "navy" | "green" | "red" | "gold";
  image?: string;
};

export const assignments: Assignment[] = [
  {
    slug: "bai-1",
    number: "01",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    summary: "Minh chứng 12 thao tác quản lý tệp và thư mục trên Windows.",
    focus: "Kỹ năng số nền tảng",
    accent: "navy",
    image: "/assets/bai-1/03-tao-thu-muc.png",
  },
  {
    slug: "bai-2",
    number: "02",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    summary: "Khảo sát 10 nguồn về tiếp thu ngôn ngữ thứ hai và đánh giá độ tin cậy.",
    focus: "Nghiên cứu học thuật",
    accent: "green",
  },
  {
    slug: "bai-3",
    number: "03",
    title: "Viết prompt hiệu quả cho các tác vụ học tập",
    summary: "Thiết kế, thử nghiệm và so sánh ba cấp độ prompt cho ba tác vụ học tập.",
    focus: "Prompt engineering",
    accent: "red",
    image: "/assets/bai-3/thu-nghiem-01.png",
  },
  {
    slug: "bai-4",
    number: "04",
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    summary: "Tổ chức quy trình nhóm bằng Trello, Google Docs, Google Drive và Google Meet.",
    focus: "Hợp tác số",
    accent: "gold",
    image: "/assets/bai-4/trello.jpg",
  },
  {
    slug: "bai-5",
    number: "05",
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    summary: "Quy trình tạo bài thuyết trình về biến đổi khí hậu với sáu công cụ AI.",
    focus: "Sáng tạo nội dung số",
    accent: "green",
  },
  {
    slug: "bai-6",
    number: "06",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    summary: "Phân tích chính sách, đạo đức và xây dựng bảy nguyên tắc sử dụng AI.",
    focus: "Đạo đức học thuật",
    accent: "navy",
  },
];

export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
