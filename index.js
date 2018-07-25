class A{
  one () {
    console.log("one A");
  }

  two(){
    console.log("two A");
  }
}

var B = {
  one () {
    console.log("one B");
  },

  two(){
    console.log("two B");
  }
}

class C extends A{
  foo(){
    this.one();
    super.two();
  }
}

var c = new C();
c.foo();

c.foo.call(B);

/*
one A
two A
one B
two A
*/