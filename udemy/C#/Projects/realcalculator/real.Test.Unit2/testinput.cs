using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace real.Test.Unit2
{
    [TestClass]
    public class testinput
    {
        private readonly realcalculator.inputconverter ics = new realcalculator.inputconverter();
        [TestMethod]
        public void TestMethod()
        {
            string inum = "5";
            double cnum = ics.itn(inum);
            Assert.AreEqual(5, cnum);
        }
        [TestMethod] // ce sont des attributs
        [ExpectedException(typeof(ArgumentException))] // on s'attend a ce type d'erreur
        public void TestE()
        {
            string inum = "+";
            double cnum = ics.itn(inum);
            
        }
    }
}
