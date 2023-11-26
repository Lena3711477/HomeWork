//3. Напишите анотации типов к этому классу.
export class ObjectManipulator<T> {

    constructor(protected obj: T) { }
    public set<K extends keyof T>(key: K, value: T[K]): ObjectManipulator<T> {
        return new ObjectManipulator({ ...this.obj, [key]: value });
    }

    public get<K extends keyof T>(key: K): T[K] {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<T> {
        const newObj = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}
