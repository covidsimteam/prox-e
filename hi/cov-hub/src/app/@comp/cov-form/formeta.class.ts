export abstract class Formeta {
  abstract formInit(): void;
  abstract onFormChanges(): void;
  abstract saveChanges(): void;
  abstract loadChanges(): void;
}
