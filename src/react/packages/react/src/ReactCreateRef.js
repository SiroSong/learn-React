/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

import type {RefObject} from 'shared/ReactTypes';

// an immutable object with a single mutable value
export function createRef(): RefObject {
  const refObject = {
    current: null,
  };
  if (__DEV__) {
  /**
   * 通常，一个对象是可扩展的（可以添加新的属性）。密封一个对象会让这个对象变的
   * 不能添加新属性，且所有已有属性会变的不可配置。属性不可配置的效果就是属性变
   * 的不可删除，以及一个数据属性不能被重新定义成为访问器属性，或者反之。但属性
   * 的值仍然可以修改。尝试删除一个密封对象的属性或者将某个密封对象的属性从数据
   * 属性转换成访问器属性，结果会静默失败或抛出TypeError（在严格模式 中最常见
   * 的，但不唯一）。
   */
    Object.seal(refObject);
  }
  return refObject;
}
