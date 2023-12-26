"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    model;
    constructor(model) {
        this.model = model;
    }
    async save(entity) {
        const result = await this.model.query().insert(entity);
        return result;
    }
    async findById(id) {
        const result = await this.model.query().findById(id);
        return result;
    }
    async findByIdWithJoin(id, includes) {
        const result = await this.model.query().findById(id).withGraphFetched(`[${includes}]`);
        return result;
    }
    async find(criteria) {
        const result = await this.model.query().where(criteria).first();
        return result;
    }
    async findWithJoin(criteria, includes) {
        const result = await this.model.query().where(criteria).withGraphFetched(`[${includes}]`).first();
        return result;
    }
    async findAll() {
        const results = await this.model.query();
        return results;
    }
    async findAllWithJoin(includes) {
        const results = await this.model.query().withGraphFetched(`[${includes}]`);
        return results;
    }
    async findAllWithCriteria(criteria) {
        const results = await this.model.query().where(criteria).select();
        return results;
    }
    async findAllWithCriteriaAndJoin(criteria, includes) {
        let result = await this.model.query().where(criteria).withGraphFetched(`[${includes}]`);
        return result;
    }
    async update(id, entity) {
        const save = await this.model.query().patchAndFetchById(id, entity);
        return save;
    }
    async delete(id) {
        await this.model.query().deleteById(id);
    }
}
exports.Repository = Repository;
