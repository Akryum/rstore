import type { Model, ModelDefaults, ModelType, ResolvedModelItem } from './model'
import type { UpdateFormObject } from './mutation'

/**
 * The object is wrapped by the store with additional props and can be used to update the data.
 */
export interface WrappedItemBase<
  TModelType extends ModelType,
  TModelDefaults extends ModelDefaults,
  TModel extends Model,
> {
  /**
   * Name of the model.
   */
  $type: TModelType['name']

  /**
   * (Recommended) The form object helps you updating the item.
   */
  $updateForm: (options?: WrappedItemEditOptions<TModelType, TModelDefaults, TModel>) => Promise<UpdateFormObject<TModelType, TModelDefaults, TModel>>

  /**
   * Update an item directly. For a more user-friendly way, use `updateForm` instead.
   */
  $update: (data: Partial<ResolvedModelItem<TModelType, TModelDefaults, TModel>>) => Promise<void>

  /**
   * Delete the item.
   */
  $delete: () => Promise<void>
}

/**
 * The object is wrapped by the store with additional props and can be used to update the data.
 */
export type WrappedItem<
  TModelType extends ModelType,
  TModelDefaults extends ModelDefaults,
  TModel extends Model,
> = WrappedItemBase<TModelType, TModelDefaults, TModel> & ResolvedModelItem<TModelType, TModelDefaults, TModel>

/* eslint-disable unused-imports/no-unused-vars */

export interface WrappedItemEditOptions<
  TModelType extends ModelType = ModelType,
  TModelDefaults extends ModelDefaults = ModelDefaults,
  TModel extends Model = Model,
> {
  // to be extended
}

/* eslint-enable unused-imports/no-unused-vars */
