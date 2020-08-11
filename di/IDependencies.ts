import { InjectionKey } from "./InjectionKey";

export interface IDependencies {
  provide<T>(injectionKey: InjectionKey<T>): T;
  override<T>(injectionKey: InjectionKey<T>, mock: T): void;
  destroy();
}
