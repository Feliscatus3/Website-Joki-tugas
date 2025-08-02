export type ProjectType =
  | 'cv'
  | 'essay'
  | 'jurnal-reflektif'
  | 'translate'
  | 'koreksi-eyd'
  | 'penulisan-formal'
  | 'konversi-file'
  | 'tugas-presentasi'
  | ''; // untuk nilai default / belum dipilih

export type DeadlineType = 'specific' | 'flexible';

export interface FormData {
  projectType: ProjectType;
  description: string;
  deadline: {
    type: DeadlineType;
    date: Date | undefined;
    flexibility: string;
  };
}
