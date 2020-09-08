fn populate_mod_vector(a: i32, b: i32, size: i32) -> Vec<i32> {
    let mut vec = vec![];
    for i in 1..size {
        if i % a == 0 || i % b == 0 {
            vec.push(i)
        }
    }
    vec
}

fn main() {
    let vec = populate_mod_vector(3, 5, 1_000);
    let mut sum = 0;

    for x in vec.iter() {
        sum += x;
    }

    println!(
        "Sum of multiples of {} and {} less than {} is {}",
        3,
        5,
        1_000,
        sum
    )
}
