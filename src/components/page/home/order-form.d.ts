export type ProjectType =
  | 'cv'
  | 'motivational-essay'
  | 'reflective-journal'
  | 'translation'
  | 'file-conversion'
  | 'proofreading'
  | 'formal-writing';


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
