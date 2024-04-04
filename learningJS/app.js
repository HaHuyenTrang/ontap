/*
    1. Từ khóa khai báo biến: var, let, const
    // Tính chất
    var: Khai báo lại được và gắn lại được giá trị => ES06 bỏ var
    let: Không khai báo lại được nhưng gắn lại được giá trị
    const: Hằng số, không khai báo lại được và không gắn lại được

    // Phạm vi:
    // Hosting:

    2. Datatype: 2 kiểu chính:
    2.1. Kiểu dữ liệu nguyên thủy: Number, String ('' "" ``), Boolean (true || false), 
    Null (Rỗng), Undefined (Không xác định), NaN (Not a Number)

    2.2 Kiểu dữ liệu tham chiếu: Array( [] ), Object ( {} )

    => Để kiểm tra kiểu dữ liệu: typeof

    "2" + "3" => 23 chuyển đổi string => number

    Riêng toán tử "+": Phép nối chuỗi
    Các toán tử khác sẽ tự động ép kiểu dữ liệu: - * / %

    Toán tử logic: >, <, >=, <=, ==, ===, !=, !== => boolean
    == và ===: 
    + ==: So sánh value (giá trị)
    + ===: So sánh value và kiểu dữ liệu

    Toán tử: && || !
    + &&: cả 2 vế đều phải đúng thì mới trả về đúng
    + ||: Chỉ cần 1 vế đúng thì sẽ về đúng
    + !: Not => dùng để phủ định

    3. Câu điều kiện:
    if...else || switch...case

    4. Vòng lặp
    for(Giá trị khởi tạo; Điều kiện; Bước nhảy) => Để lặp với số lần biết trước
    while(Điều kiện) => Lặp với số lần không biết trước

    5. Array
    let arr = [10, 20, 30, 40]
        index:  0   1   2   3 (length - 1)
        length: 4

    CRUD: Create (Thêm mới) Read (Đọc) Update (Cập nhật) Delete (Xóa)

    Create: Thêm vào đầu => unshift()
            Thêm vào cuối => push()
            Thêm vào vị trí biết trước => 
    Read:   Đọc 1: arr[2]
            Đọc tất cả: Vòng lặp for
    Update: Update one: arr[2] = 80
            Update all: Vòng lặp
    Delete: Xóa đầu => shift()
            Xóa cuối => pop()
            Xóa vị trí biết trước => splice(vị trị index, deleteCount)

    6. Function: 
    // Cú pháp: function tenFnc() {
        // Code
    } => Định nghĩa hàm

    tenFnc() => Gọi hàm

    // Tính chất:
    + Hàm không chạy khi định nghĩa
    + Chỉ chạy khi được gọi

    7. Object - Đối tượng => {}
    CRUD:
    Create: tenObj.newKey = "NewValue"
    Read: Đọc một: tenObj.key
          Đọc nhiều: forin
    Update: tenObj.key = newValue
    Delete: delete tenObj.key
    



*/

// Tính tổng 2 số người dùng nhập vào
// let numOne = prompt("nhập vào số thứ nhất");
// let numTwo = prompt("nhập vào số thứ hai");

// let sum = numOne - numTwo;
// console.log("tổng 2 số là: ", sum);

// console.log(10 == "10"); // true
// console.log(10 === "10"); // false

// console.log(10>2 && 5>3); // true
// console.log(10>2 && 5>12); // false

// console.log(10>2 || 5>3); // true
// console.log(10>2 || 5>12); // true

// console.log(!false);

// if(10 > 5) {
//     console.log("Trang Ngokngek");
// } else if(6>2) {
//     console.log("Trang Giỏi");
// }else {
//     console.log("Trang xinh");
// }

// switch(15) {
//     case 1:
//         console.log("Trang Xinh gái");
//         break;
//     case 5:
//         console.log("Trang Giỏi");
//         break;
//     case 10:
//         console.log("Trang Thông minh");
//         break;
//     default:
//         console.log("Trang Ngok");
//         break;
// }

// 0 1 2 3 4

// for (let i = 1; i <= 5; i++) {
//   console.log("HTML");
// }

// for (let i = 0; i <= 3; i++) {
//   console.log(i);
// }

/*
    i = 0; => 0 <= 3 => statement => i++
    i = 1; => 1 <= 3 => statement => i++
    i = 2; => 2 <= 3 => statement => i++
    i = 3; => 3 <= 3 => statement => i++
    i = 4; => 4 <= 3 => End
*/

// Thêm vào đầu
// let arr = [10, 20, 30, 40];
// arr.unshift(90);
// console.log(arr);

// Thêm vào cuối
// let arr = [10, 20, 30, 40];
// arr.push(90);
// console.log(arr[2]);

// Thêm vào vị trí bất kỳ
// let arr = [10, 20, 30, 40];
// arr.splice(1, 0, 80, 90);
// console.log(arr);

// Read All
// let arr = [10, 20, 30, 40];
// console.log(arr.length); // 4
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Update All
// let arr = [10, 20, 30, 40];
// // 20 40 60 80
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }

/*
    i = 0; 0 < 4 => arr[0] => 10 => i++
    i = 1; 1 < 4 => arr[1] => 20 => i++
    i = 2; 2 < 4 => arr[2] => 30 => i++
    i = 3; 3 < 4 => arr[3] => 40 => i++
    i = 4; 4 < 4 => End
*/

// Delete - Xóa đầu
// let arr = [10, 20, 30, 40];
// arr.shift();
// console.log(arr);

// Delete - Xóa cuối
// let arr = [10, 20, 30, 40];
// arr.pop();
// console.log(arr);

// Delete - Xóa vị trí bất kỳ
// let arr = [10, 20, 30, 40];
// arr.splice(1, 2);
// console.log(arr);

// Tham số
// function student(b) {
//   console.log("Trang Ngok");
//   console.log(b); // 100
// }

// student(100); // Đối số

// Rest Parament

// function student(...param) {
//   console.log(param); // [10, 20, 30, 40]
//   console.log(arguments);
// }

// student(10, 20, 30, 40, 50); // Đối số

/*
    B1: Tính tổng các phần tử trong mảng
    input : [10, 20, 30]
    output: 60
*/
// let arr = [10, 20, 30];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   // sum+= arr[i];
//   sum = sum + arr[i];
// }

// console.log(sum);

/*
    B2: Tìm số lớn nhất trong mảng
    input : [10, 20, 30]
    output: 30
*/

// let arr = [10, 20, 30];
// let maxArr = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (maxArr < arr[i]) {
//     maxArr = arr[i];
//   }
// }
// console.log(maxArr);

/*
    B3: Tìm phần tử có trong mảng hay không
    input : [10, 5, 4, 7, 3] => 3
    output: true
*/

// let arr = [10, 5, 4, 7, 3];
// let flag = false;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 31) {
//     flag = true;
//     break;
//   }
// }

// if (flag) {
//   alert("Tìm được ");
// } else {
//   alert("Không tìm thấy");
// }

/*
    Đảo ngược giá trị mảng
    input: [1,2,3,4]
    output: [4,3,2,1]
*/

// let arr = [1, 2, 3, 4];
// let newArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }

// console.log(arr);
// console.log(newArr);

// Object

// let people = {
//   name: "Trang Điên",
//   age: 18,
//   address: "Sơn La",
// };

// C
// people.gender = "Nam";
// console.log(people);

// R - one
// console.log(people.name);

// R - all
// for (const key in people) {
//   console.log(people[key]); // Lấy value trong obj
// }

// U
// people.name = "Trang xinh đẹp";
// console.log(people);

// D
// delete people.age;
// console.log(people);


