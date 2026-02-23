export type ProjectType =
  | 'cv'
  | 'motivational-essay'
  | 'reflective-journal'
  | 'translation'
  | 'file-conversion'
  | 'proofreading'
  | 'formal-writing'
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
