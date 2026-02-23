export type ProjectType =
  | 'jurnal'
  | 'artikel'
  | 'parafrase'
  | 'essay'
  | 'resume'
  | 'translate'
  | 'cv'
  | 'lainnya'
  | ''; // untuk nilai default / belum dipilih


export type DeadlineType = 'specific' | 'flexible';

export interface UploadedFile {
  name: string;
  size: number;
  type: string;
  file: File;
}

export interface FormData {
  projectType: ProjectType;
  description: string;
  files: UploadedFile[];
  deadline: {
    type: DeadlineType;
    date: Date | undefined;
    flexibility: string;
  };
}
