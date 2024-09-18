import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./style";

export default function Tiki_OK() {
  const price = 141800;

  const [count, setCount] = useState(1);

  function handleClickIncrease() {
    setCount(count + 1);
  }

  function handleClickDecrease() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const priceFinish = (price * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image
          source={{
            uri: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/phuong-phap-giai-cac-dang-toan-thpt-nguyen-ham-tich-phan-va-ung-dung-1-2018-12-29-00-40-23.jpg?v=1595303965977",
          }}
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.productSupplier}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
          </Text>
          <Text style={styles.productOriginalPrice}>141.800 đ</Text>
          <View style={styles.quantityContainer}>
            <View style={styles.quantityControls}>
              <TouchableOpacity onPress={handleClickDecrease} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{count}</Text>
              <TouchableOpacity onPress={handleClickIncrease} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.buyLaterText}>Mua sau</Text>
          </View>
        </View>
      </View>

      <View style={styles.discountContainer}>
        <Text style={styles.discountText}>Mã giảm giá đã lưu</Text>
        <Text style={styles.viewDiscountText}>Xem tại đây</Text>
      </View>

      <View style={styles.applyDiscountContainer}>
        <TouchableOpacity style={styles.discountButton}>
          <View style={styles.discountIcon}></View>
          <Text style={styles.discountButtonText}>Mã giảm giá</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.giftVoucherContainer}>
        <Text style={styles.giftVoucherText}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={styles.enterHereText}>Nhập tại đây?</Text>
      </View>

      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}>Tạm tính</Text>
        <Text style={styles.subtotalPrice}>{priceFinish} đ</Text>
      </View>

      <View style={styles.totalContainer}>
        <View style={styles.totalDetails}>
          <Text style={styles.totalText}>Thành tiền</Text>
          <Text style={styles.totalPrice}>{priceFinish} đ</Text>
        </View>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>{"Tiến hành đặt hàng".toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
