using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace real.Test.Unit
{
    [TestClass]
    public class testengine
    {
        private readonly realcalculator.calculatorengine ca = new realcalculator.calculatorengine();
        //ad
        [TestMethod]
        public void TestMethod1()
        {
            int n1 = 1;
            int n2 = 2;
            double resu = ca.cal("add", n1, n2);
            Assert.AreEqual(3, resu);
        }

        [TestMethod]
        public void TestMethod2()
        {
            int n1 = 1;
            int n2 = 2;
            double resu = ca.cal("+", n1, n2);
            Assert.AreEqual(3, resu);
        }
        // subs
        public void TestMethod3()
        {
            int n3 = 3;
            int n4 = 2;
            double resu = ca.cal("substract", n3, n4);
            Assert.AreEqual(1, resu);
        }

        [TestMethod]
        public void TestMethod4()
        {
            int n3 = 3;
            int n4 = 2;
            double resu = ca.cal("-", n3, n4);
            Assert.AreEqual(1, resu);
        }
        // multiply
        public void TestMethod5()
        {
            int n5 = 1;
            int n6 = 2;
            double resu = ca.cal("multiply", n5, n6);
            Assert.AreEqual(2, resu);
        }

        [TestMethod]
        public void TestMethod6()
        {
            int n5 = 1;
            int n6 = 2;
            double resu = ca.cal("*", n5, n6);
            Assert.AreEqual(2, resu);
        }
        // divide
        public void TestMethod7()
        {
            int n7 = 2;
            int n8 = 2;
            double resu = ca.cal("divide", n7, n8);
            Assert.AreEqual(1, resu);
        }

        [TestMethod]
        public void TestMethod8()
        {
            int n7 = 2;
            int n8 = 2;
            double resu = ca.cal("/", n7, n8);
            Assert.AreEqual(1, resu);
        }
        // modulo
        public void TestMethod9()
        {
            int n9 = 9;
            int n10 = 3;
            double resu = ca.cal("modulo", n9, n10);
            Assert.AreEqual(0, resu);
        }

        [TestMethod]
        public void TestMethod10()
        {
            int n9 = 9;
            int n10 = 3;
            double resu = ca.cal("%", n9, n10);
            Assert.AreEqual(0, resu);
        }
    }
}
