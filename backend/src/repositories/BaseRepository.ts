// repositories/BaseRepository.ts
export abstract class BaseRepository<T> {
    abstract findAll(): Promise<T[]>;
    abstract findById(id: string): Promise<T | null>;
    abstract create(entity: T): Promise<T>;
    abstract update(id: string, entity: T): Promise<T | null>;
    abstract delete(id: string): Promise<void>;
}
